import Vue from "vue";
import * as VueRouter from "vue-router";
import { routerListConfig } from "@/web/assets";
function importFile(page) {
  // 检查是否包含子路径
  if (page.includes('/')) {
    const parts = page.split('/');
    return () => import(`../view/${parts[0]}/${parts[1]}.vue`);
  }
  return () => import(`../view/${page}/index.vue`);
}

const app = [{ path: "/", component: importFile("home") }];
const routes = app.concat(
  routerListConfig.map((item) => {
    return {
      path: "/" + item.path,
      component: importFile(item.path),
      name: item.path,
    };
  })
);
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
export default router;
