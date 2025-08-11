"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[448],{

/***/ 30448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ threeDemo)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(79224);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js
var OrbitControls = __webpack_require__(79404);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/threeDemo/index.vue?vue&type=script&setup=true&lang=js







/* harmony default export */ const threeDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

let threeDom = (0,reactivity_esm_bundler/* ref */.IL)(null);
// 创建场景
const scene = new three_module/* Scene */.KAh();
//创建一个物体（形状）
const geometry = new three_module/* BoxGeometry */.o1_(100, 100, 100); //长宽高都是100的立方体

//创建材质（外观）
const material = new three_module/* MeshLambertMaterial */.GkE({
  // color: 0x0000ff,//设置材质颜色(蓝色)
  color: 0x00ff00, //(绿色)
  transparent: true, //开启透明度
  opacity: 0.5, //设置透明度
});
//创建一个网格模型对象
const mesh = new three_module/* Mesh */.Ss9(geometry, material); //网络模型对象Mesh
//把网格模型添加到三维场景
scene.add(mesh); //网络模型添加到场景中

//添加光源 //会照亮场景里的全部物体（氛围灯），前提是物体是可以接受灯光的，这种灯是无方向的，即不会有阴影。
const ambient = new three_module/* AmbientLight */._E$(0xffffff, 0.4);
const light = new three_module/* PointLight */.KGb(0xffffff, 1); //点光源，color:灯光颜色，intensity:光照强度

scene.add(ambient);
light.position.set(200, 300, 400);
scene.add(light);

//创建一个透视相机，窗口宽度，窗口高度
const width = window.innerWidth,
  height = window.innerHeight;
const camera = new three_module/* PerspectiveCamera */.OIf(45, width / height, 1, 1000);
//设置相机位置
camera.position.set(300, 300, 300);
//设置相机方向
camera.lookAt(0, 0, 0);

//创建辅助坐标轴
const axesHelper = new three_module/* AxesHelper */._gS(200); //参数200标示坐标系大小，可以根据场景大小去设置
scene.add(axesHelper);

//创建一个WebGL渲染器
const renderer = new three_module/* WebGLRenderer */.gpv();
renderer.setSize(width, height); //设置渲染区尺寸
renderer.render(scene, camera); //执行渲染操作、指定场景、相机作为参数

const controls = new OrbitControls/* OrbitControls */.g(camera, renderer.domElement); //创建控件对象
controls.addEventListener('change', () => {
  renderer.render(scene, camera); //监听鼠标，键盘事件
});
(0,runtime_core_esm_bundler/* onMounted */.u2)(() => {
  console.log(threeDom, 111);
  threeDom.value.appendChild(renderer.domElement);
});
//

return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", {
    class: "three-demo",
    id: "three-dom",
    ref_key: "threeDom",
    ref: threeDom
  }, null, 512 /* NEED_PATCH */))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/threeDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/threeDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(threeDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-4ee2d421"]])

/* harmony default export */ const threeDemo = (__exports__);

/***/ })

}]);