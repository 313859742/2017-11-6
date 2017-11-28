import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Aboute from '../components/aboute'
import Miaov from '../components/miaov'


Vue.use(Router)
let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/aboute',
      component: Aboute
    },
    {
      path: '/miaov',
      component:Miaov
    }
  ]
});
export default router
