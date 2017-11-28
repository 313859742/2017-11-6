import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home';
import Bonent from '../components/bonent';
import Miaov from '../components/miaov';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/bonent',
      component:Bonent
    },
    {
      path:'/miaov',
      component:Miaov
    }
  ]
})
