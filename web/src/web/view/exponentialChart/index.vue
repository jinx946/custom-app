<template>
  <div class="exponential-chart-container">
    <h2>指数图表</h2>
    <div class="input-form">
      <div
        v-for="(segment, index) in segments"
        :key="index"
        class="segment-form"
      >
        <el-form :inline="true" :model="segment" class="demo-form-inline">
          <el-form-item
            :label="index === 0 ? '底数' : `段${index + 1}底数 (自动计算)`"
          >
            <el-input-number
              v-model.number="segment.base"
              placeholder="请输入底数"
              :disabled="index > 0"
            />
          </el-form-item>
          <el-form-item :label="`增长率 ${index + 1}`">
            <el-input-number
              v-model.number="segment.growthRate"
              placeholder="请输入增长率"
            />
          </el-form-item>
          <el-form-item :label="`增长次数 ${index + 1}`">
            <el-input-number
              v-model.number="segment.growthTimes"
              placeholder="请输入增长次数"
              :min="1"
            />
          </el-form-item>
          <el-form-item v-if="index > 0">
            <el-button type="danger" @click="removeSegment(index)"
              >删除</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="segment-actions">
        <el-button type="primary" @click="addSegment">添加增长段</el-button>
        <el-button type="success" @click="drawChart">绘制图表</el-button>
      </div>
    </div>
    <div id="chart-container" ref="chartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

const segments = ref([
  {
    base: 20,
    growthRate: 0.05,
    growthTimes: 10,
  },
]);

const chartRef = ref(null);
let chart = null;

onMounted(() => {
  initChart();
  drawChart();
});

const initChart = () => {
  chart = echarts.init(chartRef.value);
};

const addSegment = () => {
  const lastSegment = segments.value[segments.value.length - 1];
  const lastValue =
    lastSegment.base *
    Math.pow(1 + lastSegment.growthRate, lastSegment.growthTimes);

  segments.value.push({
    base: lastValue,
    growthRate: 0.05,
    growthTimes: 5,
  });
};

const removeSegment = (index) => {
  if (segments.value.length > 1) {
    segments.value.splice(index, 1);
  }
};

const drawChart = () => {
  // 清空之前的图表数据
  chart.clear();

  const series = [];
  const colors = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"];
  let totalSteps = 0;

  segments.value.forEach((segment, segmentIndex) => {
    const { base, growthRate, growthTimes } = segment;
    const segmentData = [];

    for (let i = 0; i <= growthTimes; i++) {
      const y = base * Math.pow(1 + growthRate, i);
      segmentData.push([totalSteps + i, y]);
    }

    series.push({
      name: `增长段 ${segmentIndex + 1}`,
      data: segmentData,
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        width: 3,
      },
      itemStyle: {
        color: colors[segmentIndex % colors.length],
      },
      label: {
        show: true,
        position: "top",
        color: colors[segmentIndex % colors.length],
        formatter: function (params) {
          return params.value[1].toFixed(2);
        },
      },
    });

    totalSteps += growthTimes;
  });

  // 生成完整的x轴数据
  const xAxisData = [];
  for (let i = 0; i <= totalSteps; i++) {
    xAxisData.push(i);
  }

  const option = {
    title: {
      text: "指数增长曲线",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        let result = `x: ${params[0].data[0]}<br/>`;
        params.forEach((param) => {
          result += `${param.seriesName}: ${param.data[1].toFixed(2)}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: series.map((s) => s.name),
      top: 30,
    },
    xAxis: {
      type: "category",
      name: "增长次数",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      name: "结果值",
    },
    series: series,
  };

  chart.setOption(option);
};

// 监听窗口大小变化，调整图表大小
window.addEventListener("resize", () => {
  if (chart) {
    chart.resize();
  }
});

// 监听segments变化，自动更新后续增长段的底数
watch(
  () => segments.value,
  (newSegments) => {
    if (newSegments.length > 1) {
      let previousValue = newSegments[0].base;

      for (let i = 1; i < newSegments.length; i++) {
        const prevSegment = newSegments[i - 1];
        previousValue =
          prevSegment.base *
          Math.pow(1 + prevSegment.growthRate, prevSegment.growthTimes);
        newSegments[i].base = previousValue;
      }
    }
  },
  { deep: true, immediate: true }
);
</script>

<style scoped>
.exponential-chart-container {
  padding: 20px;
  height: 100%;
  overflow: auto;
}

#chart-container {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}

.input-form {
  margin-bottom: 20px;
}

.segment-form {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.segment-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .segment-form {
    padding: 10px;
  }

  .segment-actions {
    flex-direction: column;
  }

  #chart-container {
    height: 400px;
  }
}
</style>
