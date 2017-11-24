// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuex from 'vuex'; // 引入
Vue.use(Vuex); // 在任何一个组件中都可以使用$store这个对象，在每一个组件的实例身上

//创建store
let store = new Vuex.Store({
  //定义应用的状态
  state:{
    n:0
  },
  mutations:{
    changeS(state,abc){
      state.n=abc;
    }
  }
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  // router,
  template: '<App/>',
  components: { App }
});
