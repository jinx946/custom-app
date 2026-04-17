<template>
  <div class="tool-container">
    <div class="app-container">
      <!-- 历史记录栏（全局） -->
      <div class="history-bar" id="historyBar">
        <span class="history-label">📜 历史记录</span>
        <div class="history-tags" id="historyTagsContainer">
          <span style="color: #94a3b8; font-size: 0.7rem"
            >暂无记录，对比或格式化JSON后自动保存</span
          >
        </div>
        <button
          id="clearAllHistoryBtn"
          class="clear-history"
          title="清空所有历史"
          @click="clearAllHistory"
        >
          🗑️ 清空
        </button>
      </div>

      <!-- TAB 头部 -->
      <div class="tabs-bar">
        <button
          class="tab-btn active"
          data-tab="diffTab"
          @click="switchTab('diffTab')"
        >
          🔍 文本差异对比
        </button>
        <button
          class="tab-btn"
          data-tab="jsonTab"
          @click="switchTab('jsonTab')"
        >
          📦 文本转JSON & 格式化
        </button>
        <button
          class="tab-btn"
          data-tab="base64Tab"
          @click="switchTab('base64Tab')"
        >
          🖼️ 图片转Base64
        </button>
      </div>

      <!-- ========================= TAB 1 : 差异对比区域 ========================= -->
      <div id="diffTab" class="tab-content active">
        <div class="input-area">
          <div class="input-card">
            <div class="input-header">
              <span>📄 文本 A (原始版本)</span>
              <span id="charCountA" class="char-counter">0 字符</span>
            </div>
            <textarea
              id="textA"
              class="json-textarea"
              placeholder="粘贴 JSON 或超长文本...&#10;支持大型JSON、日志等"
              v-model="textA"
              @input="updateCharCounts"
            ></textarea>
          </div>
          <div class="input-card">
            <div class="input-header">
              <span>✏️ 文本 B (对比版本)</span>
              <span id="charCountB" class="char-counter">0 字符</span>
            </div>
            <textarea
              id="textB"
              class="json-textarea"
              placeholder="粘贴对比文本..."
              v-model="textB"
              @input="updateCharCounts"
            ></textarea>
          </div>
        </div>

        <div class="action-bar">
          <button id="compareBtn" class="compare-btn" @click="performCompare">
            <span>⚡</span> 高亮差异 (智能分块)
          </button>
          <div class="chunk-config">
            <label>📦 分块策略</label>
            <select id="chunkSizeSelect" v-model="chunkSize">
              <option value="500">小分块 (500字符)</option>
              <option value="1000" selected>中分块 (1000字符)</option>
              <option value="2000">大分块 (2000字符)</option>
              <option value="4000">超大分块 (4000字符)</option>
              <option value="0">自动模式 (动态分块)</option>
            </select>
          </div>
        </div>

        <div class="diff-output-area">
          <div class="diff-panel">
            <div
              class="diff-panel-header"
              id="leftHeaderClick"
              @click="locateFirstByType('delete')"
            >
              <div>
                🔴 文本A 独有差异
                <span style="font-size: 10px">(点击下方删除项可定位)</span>
              </div>
              <div
                id="leftStat"
                class="stat-badge del-stat"
                @click.stop="locateFirstByType('delete')"
              >
                删除: -
              </div>
            </div>
            <div
              id="leftDiffPanel"
              class="diff-viewer"
              v-html="leftDiffContent"
            ></div>
          </div>
          <div class="diff-panel">
            <div
              class="diff-panel-header"
              id="rightHeaderClick"
              @click="locateFirstByType('insert')"
            >
              <div>
                🟢 文本B 独有差异
                <span style="font-size: 10px">(点击下方新增项可定位)</span>
              </div>
              <div
                id="rightStat"
                class="stat-badge ins-stat"
                @click.stop="locateFirstByType('insert')"
              >
                新增: -
              </div>
            </div>
            <div
              id="rightDiffPanel"
              class="diff-viewer"
              v-html="rightDiffContent"
            ></div>
          </div>
        </div>

        <div class="legend">
          <div>
            <span class="diff-del" style="display: inline-block; padding: 0 6px"
              >删除示例</span
            >
            删除线+红底: A独有
          </div>
          <div>
            <span class="diff-ins" style="display: inline-block; padding: 0 6px"
              >新增示例</span
            >
            绿色底色: B独有(新增)
          </div>
          <div>
            ✨ 点击统计标签(删除:x / 新增:x) → 定位到第一个差异项，并滚动视图
          </div>
        </div>
        <div class="footer-info">
          <div class="status-msg" id="perfStatus">{{ perfStatus }}</div>
          <div
            class="progress-bar-container"
            id="progressContainer"
            :style="{ display: showProgress ? 'block' : 'none' }"
          >
            <div
              class="progress-fill"
              id="progressFill"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
          <div>💡 对比后自动保存至历史记录</div>
        </div>
      </div>

      <!-- ========================= TAB 2 : 文本转JSON & 格式化 ========================= -->
      <div id="jsonTab" class="tab-content">
        <div class="json-tool-container">
          <div class="json-input-header">
            <h3 style="font-size: 1.2rem">📋 原始文本 / JSON字符串</h3>
            <div class="json-actions">
              <button
                id="formatJsonBtn"
                class="btn-secondary"
                @click="formatAndSaveJson"
              >
                ✨ 格式化 & 美化JSON
              </button>
              <button
                id="clearJsonBtn"
                class="btn-secondary"
                @click="clearJsonInput"
              >
                🗑️ 清空
              </button>
            </div>
          </div>
          <textarea
            id="rawJsonInput"
            class="json-editor"
            rows="8"
            placeholder='粘贴JSON字符串或普通文本，点击“格式化”将尝试解析并展示美观JSON。&#10;示例: {"name":"差异工具","version":"2.0","features":["定位","历史记录"]}'
            v-model="rawJson"
          ></textarea>
          <div
            style="
              margin-top: 18px;
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            "
          >
            <span
              ><span class="badge-format"
                >📎 格式化结果 (只读/可复制)</span
              ></span
            >
            <button
              id="copyJsonBtn"
              class="btn-secondary"
              style="padding: 4px 16px"
              @click="copyJsonResult"
            >
              📋 复制结果
            </button>
          </div>
          <div
            id="jsonPreviewArea"
            class="json-preview"
            v-html="jsonPreviewContent"
          ></div>
        </div>
      </div>

      <!-- ========================= TAB 3 : 图片转Base64 ========================= -->
      <div id="base64Tab" class="tab-content">
        <div class="json-tool-container">
          <div class="json-input-header">
            <h3 style="font-size: 1.2rem">🖼️ 图片转Base64</h3>
            <div class="json-actions">
              <button
                id="clearBase64Btn"
                class="btn-secondary"
                @click="clearBase64Content"
              >
                🗑️ 清空
              </button>
            </div>
          </div>
          <div class="tool-container">
            <!-- 左侧：上传与预览 -->
            <div class="upload-preview-area">
              <div
                class="drop-zone"
                id="dropZone"
                @click="triggerFileSelect"
                @dragover.prevent="onDragOver"
                @dragleave.prevent="onDragLeave"
                @drop.prevent="onDrop"
              >
                <div class="upload-icon">📸</div>
                <p>点击或拖拽图片至此区域</p>
                <p class="small-hint">支持 JPG, PNG, GIF, WEBP, SVG, BMP 等</p>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  class="file-input-hidden"
                  @change="onFileInputChange"
                />
              </div>
              <div class="preview-container">
                <div class="preview-title">
                  <span>🖼️ 图片预览</span>
                </div>
                <div class="preview-box" id="previewBox">
                  <div
                    class="image-placeholder"
                    id="imagePlaceholder"
                    v-if="!imagePreviewSrc"
                  >
                    <span>✨ 暂无图片</span>
                    <span style="font-size: 12px">上传后显示缩略图</span>
                  </div>
                  <img
                    id="imagePreview"
                    :src="imagePreviewSrc"
                    :style="{ display: imagePreviewSrc ? 'block' : 'none' }"
                    alt="预览图"
                  />
                </div>
                <div
                  id="fileMetaInfo"
                  class="file-info"
                  :style="{ display: fileMetaInfo ? 'inline-block' : 'none' }"
                >
                  {{ fileMetaInfo }}
                </div>
              </div>
            </div>

            <!-- 右侧：base64 结果区域 -->
            <div class="result-area">
              <div class="result-header">
                <h3>📋 Base64 编码结果</h3>
                <div class="action-buttons">
                  <button
                    class="btn-copy"
                    id="copyBtn"
                    title="复制Base64文本"
                    @click="copyToClipboard"
                  >
                    📋 复制
                  </button>
                  <button
                    class="btn-download"
                    id="downloadBtn"
                    title="下载为 .base64 文本文件"
                    @click="downloadBase64AsText"
                  >
                    💾 下载TXT
                  </button>
                </div>
              </div>
              <textarea
                id="base64Output"
                class="base64-textarea"
                readonly
                placeholder="等待图片上传，Base64 数据将显示在此处..."
                v-model="base64Output"
              ></textarea>
              <div class="meta-row">
                <span id="dataUriPrefix">{{ dataUriPrefix }}</span>
                <span id="charCountSpan" class="char-count">{{
                  charCount
                }}</span>
              </div>
              <div
                id="errorMessage"
                class="error-message"
                :style="{ display: errorMessage ? 'flex' : 'none' }"
              >
                ⚠️ <span id="errorText">{{ errorMessage }}</span>
              </div>
            </div>
          </div>
          <div class="footer-info">
            <div>⚡ 图片数据仅在本地转换，不会上传至任何服务器</div>
            <div>💡 转换后自动保存至历史记录</div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="toastMsg"
      class="success-toast"
      :class="{ show: showToast }"
      ref="toast"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>

<script>
import "@/web/style/tool.less";
export default {
  name: "ToolView",
  data() {
    return {
      // 文本对比相关
      textA: "",
      textB: "",
      chunkSize: "1000",
      leftDiffContent: "等待对比",
      rightDiffContent: "等待对比",
      perfStatus: "✅ 就绪",
      showProgress: false,
      progressPercent: 0,
      isComparing: false,
      currentAbortFlag: false,
      lastOperations: null,
      locateNum: 0,

      // JSON 相关
      rawJson: "",
      jsonPreviewContent: "✨ 点击“格式化”按钮，将显示结构化的JSON内容",

      // Base64 相关
      imagePreviewSrc: "",
      base64Output: "",
      fileMetaInfo: "",
      dataUriPrefix: "📄 格式: DataURL (Base64)",
      charCount: "字符数: 0",
      errorMessage: "",

      // 历史记录
      historyRecords: [],
      db: null,

      // Toast 相关
      showToast: false,
      toastMessage: "",

      // 当前激活的Tab
      activeTab: "diffTab",
    };
  },
  mounted() {
    this.initIndexedDB().then(() => {
      this.loadHistory();
    });
    this.setupHeaderLocate();
    this.bindClickLocate();

    // 示例填充
    if (!this.textA && !this.textB) {
      this.textA = '{"project":"diff工具","version":"1.0","author":"张三"}';
      this.textB =
        '{"project":"diff工具","version":"2.0","author":"李四","feature":"历史记录"}';
      this.updateCharCounts();
    }
  },
  methods: {
    // ---------- 历史记录管理 (使用 indexedDB) ----------
    initIndexedDB() {
      const DB_NAME = "textDiffTool";
      const DB_VERSION = 1;
      const STORE_NAME = "history";

      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
          console.error("IndexedDB 打开失败:", event.target.error);
          reject(event.target.error);
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve(this.db);
        };

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
            store.createIndex("type", "type", { unique: false });
            store.createIndex("timestamp", "timestamp", { unique: false });
          }
        };
      });
    },

    loadHistory() {
      if (!this.db) return;

      const transaction = this.db.transaction("history", "readonly");
      const store = transaction.objectStore("history");
      const request = store.getAll();

      request.onsuccess = (event) => {
        this.historyRecords = event.target.result || [];
        // 按时间戳倒序排序
        this.historyRecords.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        // 限制最多20条记录
        if (this.historyRecords.length > 20) {
          this.historyRecords = this.historyRecords.slice(0, 20);
          // 保存裁剪后的记录
          this.saveHistory();
        }
        this.renderHistoryTags();
      };

      request.onerror = () => {
        this.historyRecords = [];
        this.renderHistoryTags();
      };
    },

    saveHistory() {
      if (!this.db) return;

      if (this.historyRecords.length > 20) {
        this.historyRecords = this.historyRecords.slice(0, 20);
      }

      try {
        const transaction = this.db.transaction("history", "readwrite");
        const store = transaction.objectStore("history");

        // 先清空所有记录
        store.clear();

        // 然后添加所有记录
        this.historyRecords.forEach((record) => {
          // 确保记录可以被结构化克隆
          try {
            // 测试是否可以被结构化克隆
            structuredClone(record);
            store.put(record);
          } catch (cloneError) {
            console.warn("无法存储历史记录，跳过:", cloneError);
            // 尝试简化记录后存储
            try {
              const simplifiedRecord = {
                id: record.id,
                type: record.type,
                name: record.name,
                timestamp: record.timestamp,
                data: {
                  // 只存储基本类型数据
                  textA: record.data.textA?.substring(0, 10000) || "",
                  textB: record.data.textB?.substring(0, 10000) || "",
                  rawJson: record.data.rawJson?.substring(0, 10000) || "",
                  formattedJson:
                    record.data.formattedJson?.substring(0, 10000) || "",
                  fileName: record.data.fileName || "",
                  base64Data: record.data.base64Data?.substring(0, 10000) || "",
                },
              };
              store.put(simplifiedRecord);
            } catch (simplifyError) {
              console.error("简化后仍无法存储:", simplifyError);
            }
          }
        });

        transaction.oncomplete = () => {
          this.renderHistoryTags();
        };

        transaction.onerror = (event) => {
          console.error("存储历史记录失败:", event.target.error);
        };
      } catch (error) {
        console.error("保存历史记录出错:", error);
      }
    },

    addDiffHistory(textA, textB, chunkSize) {
      const nameA = textA.length > 40 ? textA.substring(0, 40) + "..." : textA;
      const nameB = textB.length > 30 ? textB.substring(0, 30) + "..." : textB;
      const record = {
        id: Date.now() + "_diff_" + Math.random(),
        type: "diff",
        name: `对比: ${nameA} ↔ ${nameB}`,
        timestamp: new Date().toLocaleString(),
        data: { textA, textB, chunkSize: chunkSize || 1000 },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    addJsonHistory(rawJson, formattedJson) {
      const preview =
        rawJson.length > 50 ? rawJson.substring(0, 50) + "..." : rawJson;
      const record = {
        id: Date.now() + "_json_" + Math.random(),
        type: "json",
        name: `JSON: ${preview}`,
        timestamp: new Date().toLocaleString(),
        data: { rawJson, formattedJson },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    addBase64History(fileName, base64Data) {
      const preview = fileName || "图片转换";
      const record = {
        id: Date.now() + "_base64_" + Math.random(),
        type: "base64",
        name: `Base64: ${preview}`,
        timestamp: new Date().toLocaleString(),
        data: { fileName, base64Data },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    renderHistoryTags() {
      const container = document.getElementById("historyTagsContainer");
      if (!container) return;
      if (this.historyRecords.length === 0) {
        container.innerHTML =
          '<span style="color:#94a3b8; font-size:0.7rem;">暂无记录，对比或格式化JSON后自动保存</span>';
        return;
      }
      const tagsHtml = this.historyRecords
        .map((record) => {
          const icon =
            record.type === "diff"
              ? "🔁"
              : record.type === "json"
              ? "📋"
              : "🖼️";
          return `<div class="history-tag" data-id="${record.id}">
                      <span class="tag-icon">${icon}</span>
                      <span>${this.escapeHtmlSimple(record.name)}</span>
                      <span class="tag-time">${record.timestamp}</span>
                  </div>`;
        })
        .join("");
      container.innerHTML = tagsHtml;
      document.querySelectorAll(".history-tag").forEach((tag) => {
        tag.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = tag.getAttribute("data-id");
          const record = this.historyRecords.find((r) => r.id === id);
          if (record) this.restoreRecord(record);
        });
      });
    },

    escapeHtmlSimple(str) {
      if (!str) return "";
      return str.replace(/[&<>]/g, (m) =>
        m === "&" ? "&amp;" : m === "<" ? "&lt;" : "&gt;"
      );
    },

    restoreRecord(record) {
      if (record.type === "diff") {
        this.switchTab("diffTab");
        const { textA, textB, chunkSize } = record.data;
        this.textA = textA;
        this.textB = textB;
        if (chunkSize) {
          this.chunkSize = String(chunkSize);
        }
        this.updateCharCounts();
        this.perfStatus = `📂 已加载历史对比记录，点击"高亮差异"重新对比`;
        this.leftDiffContent =
          "<span>⚡ 历史已加载，点击对比按钮查看差异</span>";
        this.rightDiffContent = "<span>⚡ 历史已加载</span>";
        document.getElementById("leftStat").innerHTML = "删除: -";
        document.getElementById("rightStat").innerHTML = "新增: -";
      } else if (record.type === "json") {
        this.switchTab("jsonTab");
        const { rawJson, formattedJson } = record.data;
        this.rawJson = rawJson;
        if (formattedJson && formattedJson !== "") {
          this.jsonPreviewContent = this.escapeHtmlSimple(formattedJson);
        } else {
          this.jsonPreviewContent = '✨ 已加载原始JSON，点击"格式化"重新解析';
        }
      } else if (record.type === "base64") {
        this.switchTab("base64Tab");
        const { fileName, base64Data } = record.data;
        if (base64Data) {
          this.base64Output = base64Data;
          this.updateBase64CharCount(base64Data);
          // 更新预览
          this.imagePreviewSrc = base64Data;
          // 更新文件信息
          this.fileMetaInfo = `📁 ${fileName || "历史图片"}`;
        }
      }
    },

    clearAllHistory() {
      if (confirm("确定清空所有历史记录吗？")) {
        this.historyRecords = [];
        this.saveHistory();
        this.perfStatus = "🗑️ 历史已清空";
        setTimeout(() => {
          if (this.perfStatus.includes("历史已清空"))
            this.perfStatus = "✅ 就绪";
        }, 1500);
      }
    },

    // 文本对比相关方法
    updateCharCounts() {
      const charCountA = document.getElementById("charCountA");
      const charCountB = document.getElementById("charCountB");
      if (charCountA) {
        charCountA.innerText = `${Array.from(
          this.textA
        ).length.toLocaleString()} 字符`;
      }
      if (charCountB) {
        charCountB.innerText = `${Array.from(
          this.textB
        ).length.toLocaleString()} 字符`;
      }
    },

    setProgress(percent, visible = true) {
      this.showProgress = visible;
      this.progressPercent = Math.min(100, Math.max(0, percent));
    },

    computeDiffOnBlock(orig, mod) {
      const arrOrig = Array.from(orig),
        arrMod = Array.from(mod);
      const n = arrOrig.length,
        m = arrMod.length;
      if (n === 0 && m === 0) return [];
      if (n === 0) return arrMod.map((ch) => ({ type: "insert", char: ch }));
      if (m === 0) return arrOrig.map((ch) => ({ type: "delete", char: ch }));
      const dp = Array(n + 1);
      for (let i = 0; i <= n; i++) {
        dp[i] = new Uint16Array(m + 1);
        dp[i][0] = i;
      }
      for (let j = 0; j <= m; j++) dp[0][j] = j;
      for (let i = 1; i <= n; i++) {
        const aChar = arrOrig[i - 1];
        for (let j = 1; j <= m; j++) {
          if (aChar === arrMod[j - 1]) dp[i][j] = dp[i - 1][j - 1];
          else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
      const ops = [];
      let i = n,
        j = m;
      while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && arrOrig[i - 1] === arrMod[j - 1]) {
          ops.unshift({ type: "equal", char: arrOrig[i - 1] });
          i--;
          j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] <= dp[i - 1][j])) {
          ops.unshift({ type: "insert", char: arrMod[j - 1] });
          j--;
        } else if (i > 0) {
          ops.unshift({ type: "delete", char: arrOrig[i - 1] });
          i--;
        } else break;
      }
      return ops;
    },

    async chunkedDiff(textA, textB, chunkSize, onProgress) {
      const arrA = Array.from(textA),
        arrB = Array.from(textB);
      const lenA = arrA.length,
        lenB = arrB.length;
      if (lenA <= chunkSize && lenB <= chunkSize) {
        if (onProgress) onProgress(100);
        return this.computeDiffOnBlock(textA, textB);
      }
      const maxLen = Math.max(lenA, lenB);
      const totalChunks = Math.ceil(maxLen / chunkSize);
      let allOps = [];
      let lastAPos = 0,
        lastBPos = 0;
      for (let chunkIdx = 0; chunkIdx < totalChunks; chunkIdx++) {
        if (this.currentAbortFlag) return null;
        let endA = Math.min(lenA, lastAPos + chunkSize);
        let endB = Math.min(lenB, lastBPos + chunkSize);
        if (chunkIdx === totalChunks - 1) {
          endA = lenA;
          endB = lenB;
        }
        const subA = arrA.slice(lastAPos, endA).join("");
        const subB = arrB.slice(lastBPos, endB).join("");
        const subOps = this.computeDiffOnBlock(subA, subB);
        allOps.push(...subOps);
        let consumedA = 0,
          consumedB = 0;
        for (const op of subOps) {
          if (op.type === "equal" || op.type === "delete") consumedA++;
          if (op.type === "equal" || op.type === "insert") consumedB++;
        }
        lastAPos += consumedA;
        lastBPos += consumedB;
        const progress = Math.min(
          100,
          Math.floor(((chunkIdx + 1) / totalChunks) * 100)
        );
        if (onProgress) onProgress(progress);
        if (chunkIdx % 3 === 0) await new Promise((r) => setTimeout(r, 0));
      }
      return allOps;
    },

    escapeHtml(str) {
      return str.replace(/[&<>]/g, (m) =>
        m === "&" ? "&amp;" : m === "<" ? "&lt;" : "&gt;"
      );
    },

    locateFirstByType(type) {
      const panel =
        type === "delete"
          ? document.getElementById("leftDiffPanel")
          : document.getElementById("rightDiffPanel");
      const selector = type === "delete" ? ".diff-del" : ".diff-ins";
      const elems = panel.querySelectorAll(selector);
      if (elems.length === 0) {
        this.perfStatus = `ℹ️ 没有找到${
          type === "delete" ? "删除" : "新增"
        }差异项`;
        return;
      }
      if (this.locateNum >= elems.length) this.locateNum = 0;
      this.locateNum++;
      const firstElem = elems[this.locateNum - 1];
      if (firstElem) {
        // 滚动父容器 (panel本身有滚动条)
        firstElem.scrollIntoView({ behavior: "smooth", block: "center" });
        firstElem.classList.add("highlight-glow");
        setTimeout(() => firstElem.classList.remove("highlight-glow"), 800);
        this.perfStatus = `🎯 已定位到首个${
          type === "delete" ? "删除" : "新增"
        }差异`;
        setTimeout(() => {
          if (this.perfStatus.includes("已定位")) this.perfStatus = "✅ 就绪";
        }, 1500);
      } else {
        this.perfStatus = `ℹ️ 没有找到${
          type === "delete" ? "删除" : "新增"
        }差异项`;
      }
    },

    renderDiffPanels(operations) {
      if (!operations || operations.length === 0) {
        this.leftDiffContent = '<span class="diff-equal">✨ 完全一致</span>';
        this.rightDiffContent = '<span class="diff-equal">✨ 完全一致</span>';
        document.getElementById("leftStat").innerHTML = "删除: 0";
        document.getElementById("rightStat").innerHTML = "新增: 0";
        return;
      }
      // 左视图 仅 delete + equal
      let leftResult = "",
        leftBuffer = "",
        leftLastType = null;
      let delCount = 0;
      const flushLeft = () => {
        if (leftBuffer === "") return;
        if (leftLastType === "equal")
          leftResult += `<span class="diff-equal">${this.escapeHtml(
            leftBuffer
          )}</span>`;
        else if (leftLastType === "delete") {
          leftResult += `<span class="diff-del" data-del-idx="${delCount}">${this.escapeHtml(
            leftBuffer
          )}</span>`;
          delCount++;
        }
        leftBuffer = "";
      };
      for (const op of operations) {
        if (op.type === "insert") continue;
        if (leftLastType !== op.type && leftBuffer !== "") flushLeft();
        leftLastType = op.type;
        leftBuffer += op.char;
      }
      flushLeft();
      // 右视图
      let rightResult = "",
        rightBuffer = "",
        rightLastType = null;
      let insCount = 0;
      const flushRight = () => {
        if (rightBuffer === "") return;
        if (rightLastType === "equal")
          rightResult += `<span class="diff-equal">${this.escapeHtml(
            rightBuffer
          )}</span>`;
        else if (rightLastType === "insert") {
          rightResult += `<span class="diff-ins" data-ins-idx="${insCount}">${this.escapeHtml(
            rightBuffer
          )}</span>`;
          insCount++;
        }
        rightBuffer = "";
      };
      for (const op of operations) {
        if (op.type === "delete") continue;
        if (rightLastType !== op.type && rightBuffer !== "") flushRight();
        rightLastType = op.type;
        rightBuffer += op.char;
      }
      flushRight();

      this.leftDiffContent =
        leftResult || '<span class="diff-equal">无A独有内容</span>';
      this.rightDiffContent =
        rightResult || '<span class="diff-equal">无B独有内容</span>';
      document.getElementById("leftStat").innerHTML = `删除: ${delCount}`;
      document.getElementById("rightStat").innerHTML = `新增: ${insCount}`;
    },

    bindClickLocate() {
      // 移除旧监听避免重复，使用事件委托更稳
      const leftPanel = document.getElementById("leftDiffPanel");
      const rightPanel = document.getElementById("rightDiffPanel");
      if (leftPanel) {
        leftPanel.removeEventListener("click", this.leftItemClickHandler);
        leftPanel.addEventListener(
          "click",
          this.leftItemClickHandler.bind(this)
        );
      }
      if (rightPanel) {
        rightPanel.removeEventListener("click", this.rightItemClickHandler);
        rightPanel.addEventListener(
          "click",
          this.rightItemClickHandler.bind(this)
        );
      }
    },

    leftItemClickHandler(e) {
      let target = e.target.closest(".diff-del");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("highlight-glow");
        setTimeout(() => target.classList.remove("highlight-glow"), 800);
        this.perfStatus = "📍 已定位删除项";
      }
    },

    rightItemClickHandler(e) {
      let target = e.target.closest(".diff-ins");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("highlight-glow");
        setTimeout(() => target.classList.remove("highlight-glow"), 800);
        this.perfStatus = "📍 已定位新增项";
      }
    },

    async performCompare() {
      if (this.isComparing) return;
      this.isComparing = true;
      this.currentAbortFlag = false;
      this.perfStatus = "⏳ 处理中...";
      this.leftDiffContent = "<span>⏳ 处理中...</span>";
      this.rightDiffContent = "<span>⏳ 请稍候</span>";
      this.setProgress(0, true);
      const textA = this.textA;
      const textB = this.textB;
      let rawChunkSize = parseInt(this.chunkSize, 10);
      if (rawChunkSize === 0) {
        const maxLen = Math.max(textA.length, textB.length);
        rawChunkSize =
          maxLen > 50000
            ? 3000
            : maxLen > 20000
            ? 2000
            : maxLen > 8000
            ? 1200
            : 800;
        this.perfStatus = `🔧 自动分块: ${rawChunkSize}`;
      }
      const start = performance.now();
      try {
        const ops = await this.chunkedDiff(textA, textB, rawChunkSize, (p) =>
          this.setProgress(p, true)
        );
        if (this.currentAbortFlag || !ops) throw new Error("中断");
        this.lastOperations = ops;
        this.renderDiffPanels(ops);
        this.bindClickLocate();
        const elapsed = (performance.now() - start).toFixed(1);
        const delStat = document.getElementById("leftStat").innerText;
        const insStat = document.getElementById("rightStat").innerText;
        this.perfStatus = `✅ 完成 (${elapsed}ms) ${delStat} ${insStat}`;
        this.setProgress(100, false);
        try {
          this.addDiffHistory(textA, textB, rawChunkSize);
        } catch (historyError) {
          console.warn("保存历史记录失败:", historyError);
          // 不影响对比结果，继续执行
        }
      } catch (e) {
        this.leftDiffContent =
          '<span style="color:#b91c1c;">❌ 对比出错</span>';
        this.perfStatus = "⚠️ 对比失败";
      } finally {
        this.isComparing = false;
        this.setProgress(0, false);
      }
    },

    setupHeaderLocate() {
      const leftHeader = document.getElementById("leftHeaderClick");
      const rightHeader = document.getElementById("rightHeaderClick");
      if (leftHeader) leftHeader.style.cursor = "pointer";
      if (rightHeader) rightHeader.style.cursor = "pointer";
    },

    // JSON 相关方法
    formatAndSaveJson() {
      const raw = this.rawJson;
      if (raw.trim() === "") {
        this.jsonPreviewContent = "⚠️ 请输入JSON内容";
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        const pretty = JSON.stringify(parsed, null, 2);
        this.jsonPreviewContent = this.escapeHtmlSimple(pretty);
        try {
          this.addJsonHistory(raw, pretty);
        } catch (historyError) {
          console.warn("保存JSON历史记录失败:", historyError);
          // 不影响JSON格式化结果，继续执行
        }
      } catch (e) {
        this.jsonPreviewContent = `❌ JSON解析失败: ${e.message}`;
      }
    },

    copyJsonResult() {
      const content = this.jsonPreviewContent;
      if (!content || content.includes("JSON解析失败")) {
        this.showToast("无有效内容可复制", true);
      } else {
        navigator.clipboard
          .writeText(content)
          .then(() => {
            this.showToast("✅ JSON结果已复制到剪贴板");
          })
          .catch(() => {
            this.showToast("复制失败，请手动选择复制", true);
          });
      }
    },

    clearJsonInput() {
      this.rawJson = "";
      this.jsonPreviewContent = "✨ 已清空，点击格式化查看结果";
    },

    // Base64 相关方法
    showToast(message, isError = false) {
      this.toastMessage =
        message || (isError ? "❌ 操作失败" : "✅ 已复制到剪贴板");
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },

    hideError() {
      this.errorMessage = "";
    },

    showError(message) {
      this.errorMessage = message;
    },

    updateBase64CharCount(base64Str) {
      const len = base64Str.length;
      this.charCount = `字符数: ${len.toLocaleString()}`;
    },

    resetImagePreview() {
      this.imagePreviewSrc = "";
      this.fileMetaInfo = "";
    },

    clearBase64AndMeta() {
      this.base64Output = "";
      this.updateBase64CharCount("");
      this.dataUriPrefix = "📄 格式: DataURL (Base64)";
      this.fileMetaInfo = "";
    },

    processImageFile(file) {
      this.hideError();
      if (!file) {
        return;
      }
      // 检查是否为图片类型
      if (!file.type.startsWith("image/")) {
        this.showError(
          "请选择一个有效的图片文件（JPEG, PNG, GIF, WebP, SVG等）"
        );
        this.clearBase64AndMeta();
        this.resetImagePreview();
        return;
      }
      // 可选大小限制: 最大 30MB
      const maxSize = 30 * 1024 * 1024; // 30MB
      if (file.size > maxSize) {
        this.showError(
          `图片过大 (${(file.size / (1024 * 1024)).toFixed(
            1
          )}MB) ，请选择小于 30MB 的图片`
        );
        this.clearBase64AndMeta();
        this.resetImagePreview();
        return;
      }

      // 显示文件名和大小
      const fileSizeKB = (file.size / 1024).toFixed(1);
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      const sizeStr =
        file.size > 1024 * 1024 ? `${fileSizeMB} MB` : `${fileSizeKB} KB`;
      this.fileMetaInfo = `📁 ${file.name}  ·  ${sizeStr}  ·  ${file.type}`;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataURL = evt.target.result; // 完整的 base64 data url
        // 更新文本域
        this.base64Output = dataURL;
        this.updateBase64CharCount(dataURL);
        // 在 meta 区域展示简短说明
        const mime = file.type;
        this.dataUriPrefix = `📄 MIME: ${mime}  |  DataURI 长度: ${dataURL.length}`;

        // 更新图片预览
        this.imagePreviewSrc = dataURL;

        // 保存到历史记录
        try {
          this.addBase64History(file.name, dataURL);
        } catch (historyError) {
          console.warn("保存Base64历史记录失败:", historyError);
          // 不影响Base64转换结果，继续执行
        }
      };
      reader.onerror = () => {
        this.showError("文件读取失败，请重试或更换图片");
        this.clearBase64AndMeta();
        this.resetImagePreview();
      };
      reader.readAsDataURL(file);
    },

    triggerFileSelect() {
      document.getElementById("fileInput").click();
    },

    onFileInputChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.processImageFile(files[0]);
      } else {
        this.clearBase64AndMeta();
        this.resetImagePreview();
        this.hideError();
      }
      // 清空 input value，以便再次选择同一个文件可触发change
      event.target.value = "";
    },

    onDragOver(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.add("drag-over");
    },

    onDragLeave(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.remove("drag-over");
    },

    onDrop(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.remove("drag-over");
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          this.processImageFile(file);
        } else {
          this.showError("拖拽的文件不是图片格式，请上传图片文件");
          this.clearBase64AndMeta();
          this.resetImagePreview();
        }
      }
    },

    async copyToClipboard() {
      const textToCopy = this.base64Output;
      if (!textToCopy || textToCopy.trim() === "") {
        this.showToast("没有可复制的内容，请先上传图片", true);
        return;
      }
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.showToast("✅ Base64 已复制到剪贴板");
      } catch (err) {
        // 降级方案
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (success) {
          this.showToast("✅ Base64 已复制到剪贴板");
        } else {
          this.showToast("复制失败，请手动选择复制", true);
        }
      }
    },

    downloadBase64AsText() {
      const content = this.base64Output;
      if (!content || content.trim() === "") {
        this.showToast("没有Base64数据可下载，请先上传图片", true);
        return;
      }
      // 提取文件名: 从图片元信息尝试获取或默认
      let fileName = "base64-result";
      if (this.fileMetaInfo) {
        const match = this.fileMetaInfo.match(/📁 (.+?) ·/);
        if (match && match[1]) {
          fileName = match[1].replace(/\.[^/.]+$/, "");
        }
      }
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}-base64.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.showToast("✅ Base64 已下载为文本文件");
    },

    clearBase64Content() {
      this.clearBase64AndMeta();
      this.resetImagePreview();
      this.hideError();
      this.showToast("✅ 已清空Base64内容");
    },

    // Tab 切换方法
    switchTab(activeId) {
      this.activeTab = activeId;
      document
        .querySelectorAll(".tab-content")
        .forEach((tab) => tab.classList.remove("active"));
      document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.classList.remove("active"));
      document.getElementById(activeId).classList.add("active");
      const btn = Array.from(document.querySelectorAll(".tab-btn")).find(
        (b) => b.getAttribute("data-tab") === activeId
      );
      if (btn) btn.classList.add("active");
    },
  },
};
</script>

<style scoped>
.tool-container {
  width: 100%;
  min-height: 100vh;
}
</style>
