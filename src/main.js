import Vue from "vue";
import App from "./App.vue";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import router from "./router";
import store from "./store";
import { plusReady } from "@/utils/plusReady.js";

Vue.use(Mint);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    plusReady(this.plusReady);
  },
  methods: {
    plusReady() {}
  }
}).$mount("#app");
