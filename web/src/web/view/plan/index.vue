<script setup>
import { onBeforeMount, reactive, ref, watch, nextTick, onMounted } from "vue";
import {
  Table,
  Input as AInput,
  Button,
  Popconfirm,
  Modal,
  Upload,
} from "ant-design-vue";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
import * as XLSX from "xlsx";
import * as echarts from "echarts";

// 表格数据
const dataSource = ref([]);

// 自定义列
const customColumns = ref([]);

// 表格列定义
const columns = reactive([
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    width: 168,
    fixed: "left",
  },
  {
    title: "代码",
    dataIndex: "code",
    key: "code",
    width: 168,
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
    width: 168,
  },
  {
    title: "数量",
    dataIndex: "quantity",
    key: "quantity",
    width: 168,
  },
  {
    title: "增长率",
    dataIndex: "interest",
    key: "interest",
    width: 168,
  },
  {
    title: "总值",
    dataIndex: "total",
    key: "total",
    width: 168,
  },
  {
    title: "颜色",
    dataIndex: "color",
    key: "color",
    width: 168,
  },
  ...customColumns.value, // 添加自定义列
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    fixed: "right",
    width: 150,
  },
]);

// 用于触发表格重新渲染的key
const tableKey = ref(0);

// Modal相关
const modalVisible = ref(false);
const customColumnName = ref("");
const modalConfirmLoading = ref(false);

// 编辑行的Modal相关
const editModalVisible = ref(false);
const editForm = ref({
  key: "",
  name: "",
  code: "",
  price: 0,
  quantity: 0,
  interest: 0,
  total: 0,
  color: "#1890ff", // 默认颜色
});

// 饼图相关
const chartVisible = ref(true);
let pieChart = null;

// 从localStorage加载数据
const loadFromLocalStorage = () => {
  try {
    // 加载表格数据
    const savedData = localStorage.getItem("planTableData");
    if (savedData) {
      dataSource.value = JSON.parse(savedData);
    } else {
      // 如果没有保存的数据，使用默认数据
      dataSource.value = [
        {
          key: "1",
          name: "商品A",
          code: "001",
          price: 100,
          quantity: 2,
          interest: 0.05,
          total: 200,
          color: "#1890ff",
        },
        {
          key: "2",
          name: "商品B",
          code: "002",
          price: 200,
          quantity: 1,
          interest: 0.03,
          total: 200,
          color: "#52c41a",
        },
      ];
    }

    // 加载自定义列
    const savedColumns = localStorage.getItem("planTableColumns");
    if (savedColumns) {
      customColumns.value = JSON.parse(savedColumns);
      // 更新列定义
      const customCols = customColumns.value;
      columns.splice(7, columns.length - 8, ...customCols); // 替换自定义列部分
    } else {
      // 默认自定义列
      customColumns.value = [
        {
          title: "2025",
          dataIndex: "custom-2025",
          key: "custom-2025",
          width: 168,
        },
        {
          title: "2026",
          dataIndex: "custom-2026",
          key: "custom-2026",
          width: 168,
        },
      ];
      columns.splice(7, 0, ...customColumns.value);
    }
  } catch (error) {
    console.error("从localStorage加载数据失败:", error);
    // 使用默认数据
    dataSource.value = [
      {
        key: "1",
        name: "商品A",
        code: "001",
        price: 100,
        quantity: 2,
        interest: 0.05,
        total: 200,
        color: "#1890ff",
      },
      {
        key: "2",
        name: "商品B",
        code: "002",
        price: 200,
        quantity: 1,
        interest: 0.03,
        total: 200,
        color: "#52c41a",
      },
    ];

    customColumns.value = [
      {
        title: "2025",
        dataIndex: "custom-2025",
        key: "custom-2025",
        width: 168,
      },
      {
        title: "2026",
        dataIndex: "custom-2026",
        key: "custom-2026",
        width: 168,
      },
    ];
    columns.splice(7, 0, ...customColumns.value);
  }
};

// 保存数据到localStorage
const saveToLocalStorage = () => {
  try {
    localStorage.setItem("planTableData", JSON.stringify(dataSource.value));
    localStorage.setItem(
      "planTableColumns",
      JSON.stringify(customColumns.value)
    );
  } catch (error) {
    console.error("保存数据到localStorage失败:", error);
    Modal.error({
      title: "保存失败",
      content: "无法保存数据到本地存储",
    });
  }
};

// 在组件挂载前加载数据
onBeforeMount(() => {
  loadFromLocalStorage();
});

// 添加行
const addRow = () => {
  const newRow = {
    key: Date.now().toString(),
    name: "",
    code: "",
    price: 0,
    quantity: 0,
    interest: 0,
    total: 0,
    color: "#1890ff", // 默认颜色
  };
  dataSource.value.push(newRow);
  saveToLocalStorage();
};

// 删除行
const deleteRow = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
  saveToLocalStorage();
};

// 显示编辑行的Modal
const showEditModal = (record) => {
  editForm.value = { ...record };
  editModalVisible.value = true;
};

// 保存编辑的行数据
const saveEditRow = () => {
  const target = dataSource.value.find(
    (item) => item.key === editForm.value.key
  );
  if (target) {
    Object.assign(target, editForm.value);
    // 重新计算总值 (价格 * 数量)
    target.total = (target.price * target.quantity).toFixed(2);
    saveToLocalStorage();
  }
  editModalVisible.value = false;
};

// 显示添加自定义列的Modal
const showAddCustomColumnModal = () => {
  customColumnName.value = "";
  modalVisible.value = true;
};

// 添加自定义列
const addCustomColumn = () => {
  if (!customColumnName.value.trim()) {
    Modal.warning({
      title: "提示",
      content: "列名不能为空",
    });
    return;
  }

  // 检查列名是否已存在（包括基础列和自定义列）
  const allColumnTitles = columns.map((col) => col.title);
  if (allColumnTitles.includes(customColumnName.value)) {
    Modal.warning({
      title: "提示",
      content: "列名已存在，请输入其他列名",
    });
    return;
  }

  modalConfirmLoading.value = true;

  // 模拟异步操作
  setTimeout(() => {
    // 只添加一列（标题为输入值）
    const newColumn = {
      title: customColumnName.value,
      dataIndex: `custom_${customColumnName.value}`,
      key: `custom_${customColumnName.value}`,
      width: 168,
    };

    // 插入到操作列之前
    columns.splice(columns.length - 1, 0, newColumn);

    // 添加到自定义列数组
    customColumns.value.push(newColumn);

    // 为所有数据行添加新字段
    dataSource.value.forEach((item) => {
      item[newColumn.dataIndex] = "";
    });

    // 触发表格重新渲染
    tableKey.value += 1;

    // 保存到localStorage
    saveToLocalStorage();

    modalVisible.value = false;
    modalConfirmLoading.value = false;
  }, 500);
};

// 删除自定义列
const deleteCustomColumn = (columnKey) => {
  const index = columns.findIndex((col) => col.key === columnKey);
  if (index > -1) {
    columns.splice(index, 1);
    customColumns.value = customColumns.value.filter(
      (col) => col.key !== columnKey
    );

    // 从所有数据行中移除该字段
    dataSource.value.forEach((item) => {
      delete item[columnKey];
    });

    // 触发表格重新渲染
    tableKey.value += 1;

    // 保存到localStorage
    saveToLocalStorage();
  }
};

// 更新单元格值
const updateCell = (key, dataIndex, value) => {
  const target = dataSource.value.find((item) => item.key === key);
  if (target) {
    target[dataIndex] = value;
    // 如果是价格或数量变化，重新计算总值 (价格 * 数量)
    if (["price", "quantity"].includes(dataIndex)) {
      target.total = (target.price * target.quantity).toFixed(2);
    }
    saveToLocalStorage();
  }
};

// 更新颜色值
const updateColor = (key, value) => {
  const target = dataSource.value.find((item) => item.key === key);
  if (target) {
    target.color = value;
    saveToLocalStorage();
  }
};

// 获取自定义列的键值列表
const getCustomColumnKeys = () => {
  return customColumns.value.map((col) => ({
    key: col.key,
    title: col.title,
    dataIndex: col.dataIndex,
  }));
};

// 文件上传相关
const fileList = ref([]);
const showUploadModal = ref(false);

// 导出表格数据为Excel（带时间戳）
const exportToExcelWithTimestamp = () => {
  // 准备导出的数据，只包含列标题和数据，不包含操作列
  const exportColumns = columns.filter((col) => col.key !== "action");

  // 构造表头
  const headers = exportColumns.map((col) => col.title);

  // 构造数据行
  const dataRows = dataSource.value.map((item) => {
    return exportColumns.map((col) => {
      // 对于总值列，确保显示计算后的值
      if (col.dataIndex === "total") {
        return (item.price * item.quantity).toFixed(2);
      }
      return item[col.dataIndex] || "";
    });
  });

  // 合并表头和数据
  const worksheetData = [headers, ...dataRows];

  // 创建工作表
  const ws = XLSX.utils.aoa_to_sheet(worksheetData);

  // 创建工作簿
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "表格数据");

  // 生成带时间戳的文件名
  const now = new Date();
  const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // 导出文件
  XLSX.writeFile(wb, `表格数据_${timestamp}.xlsx`);
};

// 显示导入文件的Modal
const showImportModal = () => {
  // 先导出当前数据
  exportToExcelWithTimestamp();
  // 显示上传Modal
  showUploadModal.value = true;
  fileList.value = [];
};

// 处理文件上传前的操作
const beforeUpload = (file) => {
  // 只允许上传xlsx文件
  const isExcel =
    file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.type === "application/vnd.ms-excel" ||
    file.name.endsWith(".xlsx");

  if (!isExcel) {
    Modal.error({
      title: "文件类型错误",
      content: "只能上传Excel文件(.xlsx)",
    });
    return false;
  }

  // 读取并处理Excel文件
  readFileAndImport(file);
  return false; // 阻止默认上传行为
};

// 读取并导入Excel文件
const readFileAndImport = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // 获取第一个工作表
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // 将工作表转换为JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length < 2) {
        Modal.warning({
          title: "文件内容为空",
          content: "导入的Excel文件没有有效数据",
        });
        return;
      }

      // 解析表头
      const headers = jsonData[0];

      // 解析数据行
      const dataRows = jsonData.slice(1);

      // 构造新的数据源
      const newDataSource = dataRows.map((row, index) => {
        const item = {
          key: `imported_${Date.now()}_${index}`,
          color: "#1890ff", // 默认颜色
        };

        // 根据表头映射数据
        headers.forEach((header, colIndex) => {
          // 查找对应的dataIndex
          const column = columns.find((col) => col.title === header);
          if (column) {
            item[column.dataIndex] = row[colIndex] || "";
          }
        });

        // 确保关键字段为数字类型
        item.price = Number(item.price) || 0;
        item.quantity = Number(item.quantity) || 0;
        item.interest = Number(item.interest) || 0;

        // 重新计算总值 (价格 * 数量)
        item.total = (item.price * item.quantity).toFixed(2);

        return item;
      });

      // 更新数据源
      dataSource.value = newDataSource;

      // 保存到localStorage
      saveToLocalStorage();

      // 关闭Modal
      showUploadModal.value = false;

      Modal.success({
        title: "导入成功",
        content: `成功导入${newDataSource.length}行数据`,
      });
    } catch (error) {
      console.error("导入Excel文件失败:", error);
      Modal.error({
        title: "导入失败",
        content: "解析Excel文件时发生错误，请检查文件格式",
      });
    }
  };
  reader.readAsArrayBuffer(file);
};

// 修改 showChart 方法
const showChart = () => {
  chartVisible.value = !chartVisible.value; // 切换显示状态
  if (chartVisible.value) {
    nextTick(() => {
      initChart();
    });
  }
};

// 添加柱状图实例
let barChart = null;

// 修改初始化图表函数
const initChart = () => {
  // 初始化饼图
  const pieChartDom = document.getElementById("pie-chart");
  if (pieChartDom) {
    if (!pieChart) {
      pieChart = echarts.init(pieChartDom);
    }

    // 准备饼图数据
    const chartData = dataSource.value.map((item) => ({
      name: `${item.name} (${item.code})`,
      value: parseFloat(item.total),
      itemStyle: {
        color: item.color,
      },
    }));

    const pieOption = {
      title: {
        text: "占比",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "总值",
          type: "pie",
          radius: "50%", // 普通饼图
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            show: true,
            formatter: "{b}: {c}\n({d}%)", // 标签显示名称、总值和百分比
          },
          labelLine: {
            show: true,
          },
        },
      ],
    };

    pieChart.setOption(pieOption);
  }

  // 初始化柱状图
  const barChartDom = document.getElementById("bar-chart");
  if (barChartDom) {
    if (!barChart) {
      barChart = echarts.init(barChartDom);
    }

    // 准备柱状图数据
    // X轴为自定义列名
    const xAxisData = customColumns.value.map((col) => col.title);

    // 每一行数据作为一个系列
    const series = dataSource.value
      .map((item) => {
        const barData = customColumns.value.map((col) => {
          const value = item[col.dataIndex];
          // 如果值为空或不是数字，返回0
          return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
        });

        return [
          {
            name: `${item.name} (${item.code})`,
            type: "bar",
            data: barData,
            itemStyle: {
              color: item.color,
            },
            barWidth: 20, // 固定柱子宽度不超过20
            label: {
              show: true,
              position: "top",
              formatter: "{c}",
            },
          },
          {
            name: `${item.name} (${item.code}) 趋势`,
            type: "line",
            data: barData,
            itemStyle: {
              color: item.color,
            },
            smooth: false, // 不使用线性趋势线
            symbolSize: 8,
          },
        ];
      })
      .flat(); // 将嵌套数组扁平化

    const barOption = {
      title: {
        text: "数据趋势",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}",
      },
      legend: {
        data: dataSource.value
          .map((item) => [
            `${item.name} (${item.code})`,
            `${item.name} (${item.code}) 趋势`,
          ])
          .flat(),
        top: 30,
      },
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: series,
    };

    barChart.setOption(barOption);
  }
};

// 监听数据变化，重新绘制图表
watch(
  dataSource,
  () => {
    if (pieChart && chartVisible.value) {
      initChart();
    }
  },
  { deep: true }
);
onMounted(() => {
  initChart();
});
</script>

<template>
  <div class="plan-demo">
    <div style="margin-bottom: 16px">
      <Button type="primary" @click="addRow" style="margin-right: 8px">
        <PlusOutlined /> 添加行
      </Button>
      <Button @click="showAddCustomColumnModal" style="margin-right: 8px">
        <PlusOutlined /> 添加自定义列
      </Button>
      <Button @click="exportToExcelWithTimestamp" style="margin-right: 8px">
        <DownloadOutlined /> 导出Excel
      </Button>
      <Button @click="showImportModal" style="margin-right: 8px">
        <UploadOutlined /> 导入Excel
      </Button>
      <Button @click="showChart">
        <span>{{ chartVisible ? "隐藏图表" : "显示图表" }}</span>
      </Button>
    </div>

    <a-table
      :key="tableKey"
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
      :scroll="{ x: 'max-content', y: 400 }"
      bordered
      ><template #headerCell="{ column }">
        <template v-if="customColumns.some((col) => col.key === column.key)">
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span>{{ column.title }}</span>
            <a-popconfirm
              title="确定要删除这一列吗?"
              @confirm="deleteCustomColumn(column.key)"
              okText="确定"
              cancelText="取消"
            >
              <DeleteOutlined style="color: #ff4d4f; cursor: pointer" />
            </a-popconfirm>
          </div>
        </template>
        <template v-else>
          {{ column.title }}
        </template>
      </template>
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex == 'name'">
          <a-input
            :value="text"
            @change="(e) => updateCell(record.key, 'name', e.target.value)"
          />
        </template>

        <template v-else-if="column.dataIndex == 'code'">
          <a-input
            :value="text"
            @change="(e) => updateCell(record.key, 'code', e.target.value)"
          />
        </template>

        <template v-else-if="column.dataIndex == 'price'">
          <a-input
            type="number"
            :value="text"
            @change="
              (e) => updateCell(record.key, 'price', Number(e.target.value))
            "
          />
        </template>

        <template v-else-if="column.dataIndex == 'quantity'">
          <a-input
            type="number"
            :value="text"
            @change="
              (e) => updateCell(record.key, 'quantity', Number(e.target.value))
            "
          />
        </template>

        <template v-else-if="column.dataIndex == 'interest'">
          <a-input
            type="number"
            :value="text"
            @change="
              (e) => updateCell(record.key, 'interest', Number(e.target.value))
            "
          />
        </template>

        <template v-else-if="column.dataIndex == 'total'">
          <span>{{ text }}</span>
        </template>

        <template v-else-if="column.dataIndex == 'color'">
          <div style="display: flex; align-items: center">
            <div
              :style="{
                width: '20px',
                height: '20px',
                backgroundColor: text,
                marginRight: '8px',
                border: '1px solid #d9d9d9',
              }"
            ></div>
            <span>{{ text }}</span>
            <input
              type="color"
              :value="text"
              @change="(e) => updateColor(record.key, e.target.value)"
              style="margin-left: 8px; width: 40px; height: 32px"
            />
          </div>
        </template>

        <template v-else-if="column.dataIndex == 'action'">
          <div style="display: flex; gap: 8px">
            <Button size="small" @click="showEditModal(record)">
              <EditOutlined />
            </Button>
            <a-popconfirm
              title="确定要删除这一行吗?"
              @confirm="deleteRow(record.key)"
              okText="确定"
              cancelText="取消"
            >
              <Button danger size="small">
                <DeleteOutlined />
              </Button>
            </a-popconfirm>
          </div>
        </template>

        <!-- 自定义列渲染 -->
        <template v-else>
          <a-input
            :value="text"
            @change="
              (e) => updateCell(record.key, column.dataIndex, e.target.value)
            "
          />
        </template>
      </template>
    </a-table>
    <!-- 图表容器 -->
    <div v-show="chartVisible" class="chart-container">
      <div class="chart-wrapper">
        <!-- 饼图 -->
        <div id="pie-chart" class="chart-item"></div>
        <!-- 柱状图 -->
        <div id="bar-chart" class="chart-item"></div>
      </div>
    </div>
    <!-- 添加自定义列的Modal -->
    <a-modal
      v-model:visible="modalVisible"
      title="添加自定义列"
      okText="确认"
      cancelText="取消"
      :confirm-loading="modalConfirmLoading"
      @ok="addCustomColumn"
      @cancel="modalVisible = false"
    >
      <a-input
        v-model:value="customColumnName"
        placeholder="请输入自定义列名"
      />
    </a-modal>

    <!-- 编辑行的Modal -->
    <a-modal
      v-model:visible="editModalVisible"
      title="编辑行数据"
      okText="保存"
      cancelText="取消"
      @ok="saveEditRow"
      @cancel="editModalVisible = false"
    >
      <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-form-item label="名称">
          <a-input v-model:value="editForm.name" />
        </a-form-item>
        <a-form-item label="代码">
          <a-input v-model:value="editForm.code" />
        </a-form-item>
        <a-form-item label="价格">
          <a-input-number v-model:value="editForm.price" style="width: 100%" />
        </a-form-item>
        <a-form-item label="数量">
          <a-input-number
            v-model:value="editForm.quantity"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item label="增长率">
          <a-input-number
            v-model:value="editForm.interest"
            style="width: 100%"
            :step="0.01"
          />
        </a-form-item>

        <!-- 颜色选择 -->
        <a-form-item label="颜色">
          <div style="display: flex; align-items: center">
            <div
              :style="{
                width: '20px',
                height: '20px',
                backgroundColor: editForm.color,
                marginRight: '8px',
                border: '1px solid #d9d9d9',
              }"
            ></div>
            <a-input
              v-model:value="editForm.color"
              type="text"
              style="width: 60px; height: 32px"
            />
            <span style="margin-left: 8px">{{ editForm.color }}</span>
          </div>
        </a-form-item>

        <!-- 动态生成自定义列的表单项 -->
        <a-form-item
          v-for="customCol in getCustomColumnKeys()"
          :key="customCol.key"
          :label="customCol.title"
        >
          <a-input
            v-model:value="editForm[customCol.dataIndex]"
            :placeholder="`请输入${customCol.title}`"
          />
        </a-form-item>

        <!-- 总值字段显示在最后，用红色标记 -->
        <a-form-item label="总值">
          <span style="color: red; font-weight: bold">
            {{ (editForm.price * editForm.quantity).toFixed(2) }}
          </span>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 导入Excel的Modal -->
    <a-modal
      v-model:visible="showUploadModal"
      title="导入Excel文件"
      :footer="null"
      @cancel="showUploadModal = false"
    >
      <div style="text-align: center; padding: 20px">
        <p style="margin-bottom: 20px">
          导入新的Excel文件将覆盖当前所有数据。<br />
          导入前已自动导出当前数据作为备份。
        </p>
        <a-upload
          v-model:file-list="fileList"
          name="file"
          accept=".xlsx,.xls"
          :before-upload="beforeUpload"
          :max-count="1"
        >
          <a-button> <UploadOutlined /> 选择Excel文件 </a-button>
        </a-upload>
      </div>
    </a-modal>
  </div>
</template>

<style scoped lang="less">
.plan-demo {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px;
}

:deep(.ant-table) {
  .ant-input {
    border: none;
    padding: 0;

    &:focus {
      box-shadow: none;
    }
  }
}

// 图表容器样式
.chart-container {
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 16px;
  background-color: #fff;
}

.chart-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.chart-item {
  flex: 1;
  min-width: 300px;
  height: 400px;
}
</style>
