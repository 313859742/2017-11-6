import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import Login from '@/components/login'
// import Backend from '@/views/backend'
// import workbench from '@/views/backend/work'
import project from '@/views/backend/project'
import doc from '@/views/backend/doc'
let Home=()=>{
  return import('@/components/home');
}
let Login=()=>{
  return import('@/components/login');
}
let Backend=()=>{
  return import('@/views/backend');
}
let workbench=()=>{
  return import('@/views/backend/work');
}
// @符号，意思是src下的目录
Vue.use(Router);

let router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend,
      children:[
        {
          path: 'workbench',
          name: 'workbench',
          component: workbench,
          meta:{
            login:true
          }
        },
        {
          path: 'project',
          name: 'project',
          component: project,
          meta:{
            login:true
          }
        },
        {
          path: 'doc',
          name: 'doc',
          component: doc,
          meta:{
            login:false
          }
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ],
})
router.beforeEach( (to,from,next) =>{
  //判断，访问的路径是否需要登陆,true==>登陆，false==》不需要登陆
  if( to.matched.some( item => item.meta.login)){
    let r=''
    let o = JSON.parse(localStorage.getItem('isLogin')) ||{};
    if(o.login){
      next();
    }else{
      next({
        path:'/login',
        query:{
            r:to.name
        }
      });
    }
  }else{
    next();
  }; // 保存的是访问这个路径的左右的嵌套父级的路由信息对象
} );
export default router
