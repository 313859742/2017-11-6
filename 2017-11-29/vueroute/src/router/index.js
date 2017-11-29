import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Backend from '@/views/backend'
import workbench from '@/views/backend/work'
import project from '@/views/backend/project'
import doc from '@/views/backend/doc'


// @符号，意思是src下的目录
Vue.use(Router)

export default new Router({
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
          component: workbench
        },
        {
          path: 'project',
          name: 'project',
          component: project
        },
        {
          path: 'doc',
          name: 'doc',
          component: doc
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }

  ]
})
