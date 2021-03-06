import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import 'mdb-vue-ui-kit/css/mdb.min.css';




Vue.use(Buefy)
import { ToastProgrammatic as Toast } from 'buefy'

Vue.config.productionTip = false;

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Toast.open('Toasty!')

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

