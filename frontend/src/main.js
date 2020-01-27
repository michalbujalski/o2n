import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import PollData from "./plugins/PollData";

Vue.config.productionTip = false;
Vue.use(PollData, { store });
new Vue({
  router,
  store,
  vuetify,
  PollData,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
