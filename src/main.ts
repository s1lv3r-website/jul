import Vue from "vue";
import App from "./App.vue";

// @ts-expect-error missing typing
import LetItSnow from "vue-let-it-snow";

Vue.config.productionTip = false;

Vue.use(LetItSnow)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
