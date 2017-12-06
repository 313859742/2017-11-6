import Vue from 'vue'
import Vuex from 'vuex'
import {getShopCount,getAddCarData ,removeCountId} from '@/gitData/methos'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    carShops:[]  // 存放的是加入
  },
  mutations:{
    changeCarShops(state,payload){  // 传的必须是对象{shop:{}}
      payload.shop.count = 1; //
      state.carShops.push(payload.shop)
    },
    replaceCarShops (state,payload){  // 传的必须是对象{shop:{}}

      state.carShops = payload.shops;
    },
    //改变指定id的数据的count
    changeCarShopsCount(state,payload){  // 传的必须是对象{shop:{}}
      let shop=state.carShops.find(function (item) {
        return item.id == payload.skuId
      })
      shop.count=payload.count;
    },

  },
  actions:{
    //添加到购物车中，当提交数据的时候，需要去判断一下，没有添加到购物车的count为1，
    // 发送给后端，获取这个数据上商品的数量count， 如果已经存在购物车中了,
    // 只需要给当前的count+1并发送给后端，不需要获取这个商品的数据
    addCarCountAction(store,payload) {
      //是否存在购物车里面
      let shop=store.state.carShops.find(function (item) {
        return item.id == payload.skuId
      });
      // 如果已经存在购物车里面只需要改变数量就行了
      if(shop){
        let count=shop.count;
        payload.count = ++ count;
      }else{
        payload.count = 1;
      }
      getShopCount(payload).then((params) => {
        if(!shop){
          store.dispatch('getAddCarDataAction',{skuId:payload.skuId})
        }else {
          //只需要改变count的值
          store.commit('changeCarShopsCount',{
            skuId:payload.skuId,
            count:payload.count
          })
        }

      })
    },
    //那指定count的数据
    getAddCarDataAction(store,payload){
      getAddCarData(payload).then( (params2) =>{
        let shop = params2.data.data.list[0];
        store.commit('changeCarShops',{
          shop
        })
      })
    },
    //一上来就要拿到加入购物车商品的id及数量
    getCarShopIds(store){
      // 拿到加入购物车的商品所有的id
      getShopCount().then((params) => {
        let idsList=;
        let ids=params.data.idsList.map(function (item) {
          return item.skuId
        })
        getAddCarData({ skuId: ids.join(',')}).then((params) => {
          let list = params.data.data.list;
          // 商品的数据
          list.forEach( function (info) {
            let item=idsList.find( option=>info.id == option.skuId);
            info.count = item.count;
          })
          store.commit('replaceCarShops', { shops: list});
        })
      })
    }

    //删除指定ID的商品
    removeCountBySkuId(store,payload){
      removeCountId(skuId).then(function (params) {
        store.commit('removeCountId',payload)
      })
    }

  }
})
