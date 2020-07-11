import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Order from '../components/order.vue'
import Search from '../components/search.vue'
import Shopcar from '../components/shopcar.vue'
import News from '../components/gridlist/news.vue'
import Newsdetail from '../components/gridlist/newsDetail.vue'
import Wordpic from '../components/photolist/wordpic.vue'
import PicDetail from '../components/photolist/picDetail.vue'
import Goods from '../components/goods/goods.vue'
import GoodsDetail from '../components/goods/goodsDetail.vue'

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
  },
  { path:'/news',name:'name',component:News},
  { path:'/news/newsdetail',name:'detail',component:Newsdetail},
  { path:'/wordpic/:id',name:'wordpic',component:Wordpic},
  { path:'/wordpic/picdetail',name:'picDetail',component:PicDetail},
  { path:'/goods',name:'goods',component:Goods},
  { path:'/goods/goodsDetail',name:'goodsDetail',component:GoodsDetail}
]

const router = new VueRouter({
  routes,
  linkActiveClass:'link-active'
})

export default router
