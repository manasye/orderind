import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Toasted from "vue-toasted";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
Vue.use(Toasted, {
  duration: 2000
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
