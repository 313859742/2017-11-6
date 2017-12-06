//获取数据的地址和url地址配置
let Axios = require('axios');
let base = 'http://www.localhost:5000/api/';

let urlMap={
  'shop_list': 'shop_list',
  'count': 'count',
  'add_cart':'add_cart',
  'remove_count':'remove_count'
};
export function getShopListMethod() {
  return Axios.get( base + urlMap.shop_list)
};
export function getShopCount(obj={}) {
  return Axios.get( base + urlMap.count ,{
    params:{
      skuId:obj.skuId,
      count:obj.count
    }
  })
};
export function getAddCarData(obj) {
  return Axios.get( base + urlMap.add_cart ,{
    params:{
      skuId:obj.skuId
    }
  })
};
export function removeCountId(obj) { //{skuid}}
  return Axios.get( base + urlMap.remove_count ,{
    params:{
      skuId:obj.skuId
    }
  })
};
