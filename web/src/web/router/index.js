import Vue from "vue";
import * as VueRouter from "vue-router";
import { routerListConfig } from "@/web/assets";
function importFile(page) {
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
