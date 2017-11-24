// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false;
Vuex.use(Vuex);//在任何一个组件中都可以使用的$store这个对象，在每一个组件的实例身上
let store= new Vuex.Store({
  state:{
    n:0
  }
});
import './assets/css/app.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  // router,
  template: '<App/>',
  components: { App }
});
