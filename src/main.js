import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// import store from './store'

Vue.use(Vant);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
  // store,
}).$mount("#app");
