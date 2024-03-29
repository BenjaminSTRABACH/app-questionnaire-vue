import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)

//var PouchDB = require('pouchdb');
//var db = new PouchDB('vue_database');

new Vue({
  el:'#app',
  router, 
  render: h => h(App),
}).$mount('#app')
