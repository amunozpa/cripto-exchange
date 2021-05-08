import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chartkick from "vue-chartkick";
//import Chart from "chart.js";
import Highcharts from "highcharts";

Vue.use(Chartkick.use(Highcharts));

//Vue.use(Chartkick.use(Chart));

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);

Vue.filter("dolar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
