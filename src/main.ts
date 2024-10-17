import { createApp } from "vue";
import App from "./App.vue";
/**
 * 引入router
 */
import router from "./router/index";
import "./style.css";

/**
 * 引入ant
 */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

//配置ant
// app.config.productionTip = false;

/**
 * 在整个应用中使用router
 */
app.use(router);

/**
 * 在整个应用中使用整个ant
 */
app.use(Antd);

/**
 * 挂载
 */
app.mount("#app");


