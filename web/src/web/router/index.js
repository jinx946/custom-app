import Vue from 'vue';
import * as VueRouter from 'vue-router';
const home = () => import('../view/home/index.vue');
const excelTool = () => import('../view/excelTool/index.vue');
const routes = [
  { path: '/', component: excelTool },
  { path: '/home', component: home },
  { path: '/excelTool', component: excelTool },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
export default router;
