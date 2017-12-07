import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/views/shop'
import ShopList from '@/views/shopList/shopList' // 引入列表页
import Car from '@/views/shopCar/car' // 引入购物车页面
import Detail from '@/views/shopDetail/detail'  // 引入详情页
Vue.use(Router);
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'list',
          name: 'List',
          component: ShopList
        },
        {
          path: 'car',
          name: 'Car',
          component: Car,
        },
        {
          path: 'detail',
          name: 'Detail',
          component: Detail,
        }
      ]
    }

  ]
})
