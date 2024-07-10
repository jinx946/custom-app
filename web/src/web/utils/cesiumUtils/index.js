export default class MeasureDistance {
  constructor(viewer, handler) {
    this.viewer = viewer;
    this.handler = handler;
    this.initEvents();
    this.positions = [];
    this.tempPositions = [];
    this.vertexEntities = [];
    this.labelEntity = undefined;
    this.measureDistance = 0; //测量结果
  }

  //初始化数据
  initDatas(ele) {}

  //初始化事件
  initEvents() {
    this.MeasureStartEvent = new Cesium.Event(); //开始事件
    this.MeasureEndEvent = new Cesium.Event(); //结束事件
  }

  //激活
  activate() {
    this.deactivate();
    this.registerEvents(); //注册鼠标事件
    //设置鼠标状态
    this.viewer.enableCursorStyle = true;
    this.viewer._element.style.cursor = 'crosshair';
    this.plotDrawTip = new PlotDrawTip(this.viewer);
    this.plotDrawTip.setContent(['左键点击开始绘制起点']);
    this.isMeasure = true;
    this.measureDistance = 0;
    this.vertexEntities = [];
    this.random = Cesium.createGuid();
  }

  //禁用
  deactivate() {
    if (!this.isMeasure) return;
    this.unRegisterEvents();
    this.isMeasure = false;
    this.tempPositions = [];
    this.positions = [];
    this.viewer._element.style.cursor = 'default';
    this.viewer.enableCursorStyle = true;
    if (!this.plotDrawTip) return;
    this.plotDrawTip.remove();
    this.plotDrawTip = undefined;
  }

  //清空绘制
  clear() {
    //清除线对象
    // this.viewer.entities.remove(this.lineEntity);
    // this.lineEntity = undefined;

    //清除节点
    this.vertexEntities.forEach((item) => {
      this.viewer.entities.remove(item);
    });
    this.vertexEntities = [];
  }

  //空间距离
  spaceDistance(positions) {
    if (positions.length < 2) return 0;
    let sumDis = 0; //根据cesium提供的API来计算空间距离
    for (let i = 0; i < positions.length - 1; i++) {
      sumDis += Cesium.Cartesian3.distance(positions[i], positions[i + 1]);
    }
    return sumDis.toFixed(3); //保留3位小数即可 可以自己根据精度要求设置
  }

  //创建线对象
  createLineEntity() {
    this.lineEntity = this.viewer.entities.add({
      relevantId: this.random,
      polyline: {
        positions: new Cesium.CallbackProperty((e) => {
          return this.tempPositions;
        }, false),
        width: 2,
        material: new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.YELLOW,
        }),
        depthFailMaterial: new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.YELLOW,
        }),
      },
    });
    this.vertexEntities.push(this.lineEntity);
  }

  //创建线节点
  async createVertex(pos, random) {
    let vertexEntity = this.viewer.entities.add({
      relevantId: random,
      position: pos[pos.length - 1],
      id: 'MeasureDistanceVertex' + Math.random().toString(36).substr(2),
      type: 'MeasureDistanceVertex',
      label: {
        text: this.spaceDistance(pos) + '米',
        scale: 1,
        font: 'normal 20px MicroSoft YaHei',
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 50000),
        scaleByDistance: new Cesium.NearFarScalar(1000, 1, 3000, 0.4),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -30),
        outlineWidth: 9,
        outlineColor: Cesium.Color.WHITE,
        showBackground: true, //显示背景
        backgroundColor: Cesium.Color.fromCssColorString(
          'rgba(38, 38, 38, 0.75)'
        ), //背景色
        backgroundPadding: new Cesium.Cartesian2(10, 5), //padding值
      },
      point: {
        color: Cesium.Color.FUCHSIA,
        pixelSize: 8,
        disableDepthTestDistance: 500,
      },
    });
    this.vertexEntities.push(vertexEntity);
  }

  //创建起点
  createStartEntity(random) {
    let vertexEntity = this.viewer.entities.add({
      relevantId: random,
      position: this.positions[0],
      type: 'MeasureDistanceVertex',
      billboard: {
        image: require('./image/start.png'),
        scaleByDistance: new Cesium.NearFarScalar(300, 1, 1200, 0.4), //设置随图缩放距离和比例
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 50000), //设置可见距离 10000米可见
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
      point: {
        color: Cesium.Color.FUCHSIA,
        pixelSize: 6,
        disableDepthTestDistance: 500,
      },
    });
    this.vertexEntities.push(vertexEntity);
  }
}
