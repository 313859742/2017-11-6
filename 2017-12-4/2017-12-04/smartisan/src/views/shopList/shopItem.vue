<template>
  <div class="item">
    <div >
      <div class="item-img"><img
        :alt="list[index].title"
        :src="list[index].ali_image"
        style="opacity: 1;">
      </div>
      <h6>{{list[index].title}}</h6>
      <h3 >{{list[index].sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="item,i in list"
              @mouseover="getIndex(i)">
            <a href="javascript:;" :class="{active:index === i}">
              <img :src="item.image">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <a href="javascript:;" target="_blank" >查看详情 </a>
        </span>
        <span
          class="item-blue-btn"
          @click="addCar"
        >加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{list[index].price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>
<script>
  import {getShopCount} from '@/gitData/methos'
  export default {
    data(){
      return {
        index:0
      }
    },
    props:{
      shopItem:{
        type:Object
      }
    },
    computed:{
      list(){
        return this.shopItem.sku_list
      }
    },
    methods:{
      getIndex(i){
        this.index = i;
      },
      addCar(){  // 添加购物车,拿到要添加到购物车的id
        let skuId =this.list[this.index].sku_id ; // 拿到id
        console.log(skuId);
        getShopCount(skuId,1).then((params) => {
          console.log(params.data.idsList)
        })
      }
    }
  }
</script>
