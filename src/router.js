import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Question from '@/components/Question.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    }]});