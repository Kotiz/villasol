import { createApp } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import router from "./routes";
import "bootstrap";
import "./index.css";
import App from "./App.vue";
import axios from "./tools/axios";
import { createPinia} from "pinia";

const app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);
app.use(axios,{});
app.use(createPinia());
app.mount("#app");
