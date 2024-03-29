import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Questionnaire from '@/views/Questionnaire.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    }
  ]
});