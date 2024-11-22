import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Importa Bootstrap CSS y los íconos de Bootstrap aquí

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
