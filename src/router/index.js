import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Order from '../components/order.vue'
import Search from '../components/search.vue'
import Shopcar from '../components/shopcar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
    component: Home
  },{
    path: '/home',
    name: 'home',
    component: Home
  },{
    path: '/order',
    name: 'order',
    component: Order
  },{
    path: '/shopcar',
    name: 'shopcar',
    component: Shopcar
  },{
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
