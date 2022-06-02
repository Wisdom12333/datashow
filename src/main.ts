import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import scroll from "vue-seamless-scroll/src";

createApp(App).use(store).use(scroll).mount("#app");
