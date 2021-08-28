import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '../views/SearchView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SearchView
  }
]

const router = new VueRouter({
  routes
})

export default router
