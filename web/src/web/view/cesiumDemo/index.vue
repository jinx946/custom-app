<template>
  <div class="cesium-demo">
    <div id="cesiumContainer"></div>
    <div class="tool-list">
      <el-button class="tool" size="small" @click="distanceTo()">
        距离测量
      </el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
window.CESIUM_BASE_URL = '/public/Cesium';
// cesium 配置项
import {
  Cartesian3,
  createOsmBuildingsAsync,
  Ion,
  Math as CesiumMath,
  Terrain,
  Viewer,
} from 'cesium';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjE0MTgwYy03MzBiLTRkNjItYjc1Yi1kMTZlMzM4Nzc0Y2MiLCJpZCI6NjEyNzAsImlhdCI6MTYyNTgyMjg5M30.udYgNyf8EidrMuuPw6XL9f0ekd6OI5607cF4QZI0z00';
// token
import { line_fly } from '_web/data/line-fly.js';
let viewer, positionProperty, start, stop;
function createViewer() {
  // 创建视图
  viewer = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain(), //地形，世界地形地图
    infoBox: false, //禁用
  });
}
async function addBuild() {
  // 添加 建筑数据
  const osmBuildings = await Cesium.createOsmBuildingsAsync();
  viewer.scene.primitives.add(osmBuildings);
}
function addPoint() {
  // 添加点
  const dataPoint = {
    longitude: 112.57,
    latitude: 23.56,
    height: 6000,
  };
  const pointEntity = viewer.entities.add({
    description: `First data point at (${dataPoint.longitude}, ${dataPoint.latitude})`,
    position: Cesium.Cartesian3.fromDegrees(
      dataPoint.longitude,
      dataPoint.latitude,
      dataPoint.height
    ),
    point: { pixelSize: 10, color: Cesium.Color.RED },
  });
  viewer.flyTo(pointEntity);
}
function addFlyLine() {
  // 添加航线
  const flightData = line_fly;
  // Create a point for each.
  for (let i = 0; i < flightData.length; i++) {
    const dataPoint = flightData[i];

    viewer.entities.add({
      description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
      position: Cesium.Cartesian3.fromDegrees(
        dataPoint.longitude,
        dataPoint.latitude,
        dataPoint.height
      ),
      point: { pixelSize: 10, color: Cesium.Color.RED },
    });
  }
}
function addFlyTime() {
  // 添加时间序列航线并移动
  const flightData = line_fly;
  const timeStepInSeconds = 30;
  const totalSeconds = timeStepInSeconds * (flightData.length - 1);
  start = Cesium.JulianDate.fromIso8601('2020-03-09T23:10:00Z');
  stop = Cesium.JulianDate.addSeconds(
    start,
    totalSeconds,
    new Cesium.JulianDate()
  );
  viewer.clock.startTime = start.clone();
  viewer.clock.stopTime = stop.clone();
  viewer.clock.currentTime = start.clone();
  viewer.timeline.zoomTo(start, stop);
  // Speed up the playback speed 50x.
  viewer.clock.multiplier = 50;
  // Start playing the scene.
  viewer.clock.shouldAnimate = true;

  // The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
  positionProperty = new Cesium.SampledPositionProperty();

  for (let i = 0; i < flightData.length; i++) {
    const dataPoint = flightData[i];
    const time = Cesium.JulianDate.addSeconds(
      start,
      i * timeStepInSeconds,
      new Cesium.JulianDate()
    );
    // 创建一个点
    const position = Cesium.Cartesian3.fromDegrees(
      dataPoint.longitude,
      dataPoint.latitude,
      dataPoint.height
    );
    // 提前存储所有点
    positionProperty.addSample(time, position);
    viewer.entities.add({
      description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
      position: position,
      point: { pixelSize: 10, color: Cesium.Color.RED },
    });
  }
  return;
  // 创建实体，并用一条线可视化雷达采样序列，添加沿采样移动的点
  const airplaneEntity = viewer.entities.add({
    availability: new Cesium.TimeIntervalCollection([
      new Cesium.TimeInterval({ start: start, stop: stop }),
    ]),
    position: positionProperty,
    point: { pixelSize: 30, color: Cesium.Color.RED },
    path: new Cesium.PathGraphics({ width: 3 }),
  });
  // 使摄像机跟踪实体
  viewer.trackedEntity = airplaneEntity;
}
async function loadModel() {
  // const flightData = line_fly;
  // const timeStepInSeconds = 30;
  // const totalSeconds = timeStepInSeconds * (flightData.length - 1);
  // const start = Cesium.JulianDate.fromIso8601('2020-03-09T23:10:00Z');
  // const stop = Cesium.JulianDate.addSeconds(
  //   start,
  //   totalSeconds,
  //   new Cesium.JulianDate()
  // );
  // viewer.clock.startTime = start.clone();
  // viewer.clock.stopTime = stop.clone();
  // viewer.clock.currentTime = start.clone();
  // viewer.timeline.zoomTo(start, stop);
  // viewer.clock.multiplier = 50;
  // viewer.clock.shouldAnimate = true;
  // const positionProperty = new Cesium.SampledPositionProperty();

  // for (let i = 0; i < flightData.length; i++) {
  //   const dataPoint = flightData[i];
  //   const time = Cesium.JulianDate.addSeconds(
  //     start,
  //     i * timeStepInSeconds,
  //     new Cesium.JulianDate()
  //   );
  //   const position = Cesium.Cartesian3.fromDegrees(
  //     dataPoint.longitude,
  //     dataPoint.latitude,
  //     dataPoint.height
  //   );
  //   positionProperty.addSample(time, position);
  //   viewer.entities.add({
  //     description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
  //     position: position,
  //     point: { pixelSize: 10, color: Cesium.Color.RED },
  //   });
  // }

  //  加载模型
  const airplaneUri = await Cesium.IonResource.fromAssetId(2539726);
  const airplaneEntity = viewer.entities.add({
    availability: new Cesium.TimeIntervalCollection([
      new Cesium.TimeInterval({ start: start, stop: stop }),
    ]),
    position: positionProperty,
    model: { uri: airplaneUri },
    orientation: new Cesium.VelocityOrientationProperty(positionProperty),
    path: new Cesium.PathGraphics({ width: 3 }),
  });

  viewer.trackedEntity = airplaneEntity;
}
// 拾取两个点，然后传进来
function distanceTo() {
  let left = {},
    right = {};
  Cesium.Cartesian3.distance(left, right);
}
onMounted(() => {
  createViewer();
  // addBuild();
  addPoint();
  // addFlyLine();
  // addFlyTime();
  // loadModel();
});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.cesium-demo {
  width: 100%;
  height: 100%;
  background: #333;
}
#cesiumContainer {
  width: 600px;
  height: 600px;
  border: 1px solid #fff;
}
</style>
