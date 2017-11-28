import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home';
import Bonent from '../components/bonent';
import Miaov from '../components/miaov';
import Not from '../components/NotFound.vue';  // 这是找不到页面的时候显示这个页面的内容


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/bonent',
      name:'bonent',
      component:Bonent
    },
    {
      path:'/miaov',
      name:'miaov',
      component:Miaov
    },
    {
      path:'*',
      component:Not
      // redirect:function (to) {
      //   console.log(to);
      //   //路径是abc ==>home
      //   // 路径是miaov == >bonent
      //   //路径是user ==> miaov
      //
      //   if(to.path == '/abc'){
      //     return{
      //       name:'home'
      //     }
      //   }else if(to.path == '/abont'){
      //     return{
      //       name:'bonent'
      //     }
      //   }else{
      //     return {
      //       name:'miaov'
      //     }
      //   }
      // }
    }
  ]
})
