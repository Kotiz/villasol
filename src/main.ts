import { createApp } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import router from "./routes";
import "bootstrap";
import "./index.css";
import App from "./App.vue";
import axios from "./tools/axios";
import { createI18n } from 'vue-i18n';
import { createPinia} from "pinia";

const app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);
app.use(axios,{});
app.use(createPinia());
app.use(createI18n);
app.mount("#app");
