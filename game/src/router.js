import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Info from './components/Info.vue'
import Shop from './components/Shop.vue'
import Rating from './components/Rating.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    }
  ],
  mode: 'history'
})
