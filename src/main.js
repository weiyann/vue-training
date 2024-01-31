// 載入 createApp 函式
import { createApp } from "vue";
// 載入根組件
import App from "./App.vue";
// 引入路由
import router from "./router";

// import "./assets/main.css";
// 建立 Vue App 物件
const app = createApp(App);

app.use(router);
// 掛載到 HTML 標籤底下
app.mount("#app");
