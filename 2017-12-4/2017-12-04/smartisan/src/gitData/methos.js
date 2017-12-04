//获取数据的地址和url地址配置
let Axios = require('axios');
let base = 'http://www.localhost:5000/api/';

let urlMap={
  'shop_list': 'shop_list',
  'count': 'count'
};
export function getShopListMethod() {
  return Axios.get( base + urlMap.shop_list)
};
export function getShopCount(id,count) {
  return Axios.get( base + urlMap.count ,{
    params:{
      skuId: id,
      count:count
    }
  })
};
