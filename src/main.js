import { createApp } from "vue";
import App from "./App.vue";
import "../src/style.css";
import router from "./router/Index";

createApp(App).use(router).mount("#app");
