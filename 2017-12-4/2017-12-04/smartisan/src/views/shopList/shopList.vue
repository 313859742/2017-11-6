<template>
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<shop-item
              :key="item.id"
              v-for="item in list"
              :shopItem="item"
            ></shop-item>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
  import {getShopListMethod}from '@/gitData/methos';
  import shopItem from './shopItem.vue'
  export default {
      data(){
        return {
          list: []
        }
      },
      components:{
        shopItem
      },
      created(){
        getShopListMethod().then( (params) => {
          this.list = params.data.data.list;
        })
      }
  }
</script>
