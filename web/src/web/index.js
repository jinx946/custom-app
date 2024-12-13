window._ENV = {
  env: process.env.NODE_ENV,
};
console.log(_ENV.env);
import { createApp } from "vue";
import App from "./app.vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/theme.less";
import "./style/normal.less";
import "@/web/utils/date-utils.js";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "ant-design-vue/dist/reset.css";

import router from "./router/index";
import antDesign from "ant-design-vue";
const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
app.use(antDesign);

app.use(pinia);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
