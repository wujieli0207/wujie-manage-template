import { createApp } from "vue";
import App from "./App.vue";

// 引入自定义样式
import "/@/styles/index.scss";

const app = createApp(App);

app.mount("#app");
