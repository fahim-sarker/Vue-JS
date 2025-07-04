import { createApp } from "vue"; 
import App from "./App.vue";
import router from "./Router/Index";
import "../src/style.css"

createApp(App).use(router).mount("#app");
