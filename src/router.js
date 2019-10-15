const Question = { template: '<div>question</div>' }

const routes = [
    { path: '/question', component: Question }
  ]

const router = new VueRouter({
    routes 
})

const app = new Vue({
    router
  }).$mount('#app')