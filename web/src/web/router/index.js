import * as VueRouter from "vue-router";
import { routerListConfig } from "@/web/assets";

function importFile(page) {
  if (page.includes("/")) {
    const [folder, file] = page.split("/");
    return () => import(`../view/${folder}/${file}.vue`);
  }
  return () => import(`../view/${page}/index.vue`);
}

const routes = [
  { path: "/", component: importFile("home") },
  ...routerListConfig.map((item) => ({
    path: `/${item.path}`,
    component: importFile(item.path),
    name: item.path,
  })),
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
