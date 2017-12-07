<template>
  <div class="cart-top-items">
    <div class="cart-items">
      <div class="items-choose">
        <span
          class="blue-checkbox-new "
          :class="{'checkbox-on': checked}"
          @mousedown.prevent
          @click="checkedHandle"
        ><a></a></span>
      </div>
      <div class="items-thumb">
        <img :src="shopItem.shop_info.ali_image">
      </div>
      <div class="name hide-row" >
        <div class="name-table">
          <a href="javascript:;" target="_blank">{{shopItem.shop_info.title}}</a>
          <ul class="attribute">
            <li
              :key="option.spec_value_id"
              v-for="option in shopItem.shop_info.spec_json">
              {{option.show_name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="operation">
        <a class="items-delete-btn" @click="remove(shopItem.id)"></a>
      </div>
      <div class="subtotal">¥ {{totalMoney}}.00</div>
      <div class="item-cols-num">
        <div class="select js-select-quantity">
          <span class="down " @click="subtractCount" :class="{'down-disabled': isMinus}">-</span>
          <span class="num">{{shopItem.count}}</span>
          <span class="up" @click="addCount" :class="{'down-disabled': isAdd}">+</span>

        </div>
      </div>
      <div class="price">¥ {{shopItem.price}}.00</div>
    </div>
  </div>
</template>
<script>
  // 尽量不要使用props去渲染在模板中
  export default {
    props: {
      shop: {
        type: Object
      }
    },
    computed: {
      shopItem () {
        return this.shop
      },
      //计算每一个商品自己的小计
      totalMoney () {
        return parseInt(this.shopItem.price) * parseInt(this.shopItem.count)
      },
      // 是否可继续添加
      isAdd () {
        return this.shopItem.count == this.shopItem.shop_info.limit_num
      },
      // 是否可以继续减少
      isMinus () {
        return this.shopItem.count == 1
      },
      // 依赖于外界的checked
      checked : {
        get () {
          return this.shop.checked
        },
        set (newValue) {
          this.shop.checked = newValue;
        }
      }
    },
    methods:{
      //在购物车页面添加删除事件，需要传入id
      remove(skuId){
        console.log(skuId);
        this.$store.dispatch('removeCountBySkuId',{ skuId})
      },
      //添加数量，添加到最大值就不能添加
      addCount(){
        if(this.isAdd){  // 已经超出了购买最大数的，就不能购买了
          return
        }
        this.$store.dispatch('addCarCountAction',{skuId:this.shopItem.id})
      },
      // 减少数量，减少到1就不能再减少
      subtractCount(){
        if(this.isMinus){  // 如果已经减到1了，不能再减了
          return;
        }
        this.$store.dispatch('addCarCountAction',
          {
            skuId:this.shopItem.id,
            isMinus: true
          }
        )
      },
      // 切换选中不选中
      checkedHandle () {
        // 设置值，会触发computed中checked的set函数
        this.checked  = !this.checked
      }
    }
  }
</script>
