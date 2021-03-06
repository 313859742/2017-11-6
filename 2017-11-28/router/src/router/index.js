import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home';
import Bonent from '../components/bonent';
import Miaov from '../components/miaov';
import Not from '../components/NotFound.vue';  // 这是找不到页面的时候显示这个页面的内容
import Vip from '../components/vip.vue';
import FuFei from '../components/fufei.vue';
import PuTong from '../components/putong.vue';
Vue.use(Router);
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/bonent',
      name:'Bonent',
      component:Bonent
    },
    {
      path:'/miaov/:id?',
      name:'Miaov',
      component:Miaov,
      // children:[ // 子路由
      //   {
      //     path:'vip',
      //     name:'Vip',
      //     component:Vip
      //   },
      //   {
      //     path:'fufei',
      //     name:'FuFei',
      //     component:FuFei
      //   },
      //   {
      //     path:'putong',
      //     name:'PuTong',
      //     component:PuTong
      //   },
      //   {
      //     path:'*',
      //
      //   }
      // ]
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
