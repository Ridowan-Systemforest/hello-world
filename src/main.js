import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(VueMaterial);
Vue.use(Vuelidate)

new Vue({
  store,
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
