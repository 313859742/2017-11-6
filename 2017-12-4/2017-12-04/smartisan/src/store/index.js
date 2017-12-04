import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    carShops:[]  // 存放的是加入
  },
  mutations:{
    changeCarShops(state,payload){  // 传的必须是对象
      state.carShops.push(payload.skuData)
    }
  }
})
