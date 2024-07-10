import Vue from 'vue';
import * as VueRouter from 'vue-router';

const home = () => import('../view/home/index.vue');
const excelTool = () => import('../view/excelTool/index.vue');
const threeDemo = () => import('../view/three/index.vue');
const cesiumDemo = () => import('../view/cesium/index.vue');
const field = ()=>import('../view/field/index.vue');
const fileUpload = () => import('../view/fileUpload/index.vue');
const routes = [
  { path: '/', component: home },
  { path: '/home', component: home, name: 'home' },
  { path: '/excelTool', component: excelTool, name: 'excelTool' },
  { path: '/three', component: threeDemo, name: 'three' },
  { path: '/cesium', component: cesiumDemo, name: 'cesium' },
  { path: '/fileUpload', component: fileUpload, name: 'fileUpload' },
  { path: '/field', component: field, name: 'field' },
  
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
export default router;
