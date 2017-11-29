<template>
  <div>我是user的页面，用来展示人物的信息的
    <br/>
    <ul>
      <li
          :key="item.id"
          v-for="item in users"
      ><router-link to="{path: '/user/'+item.id}">{{item.name}}</router-link></li>
    </ul>
    <br/>
    <div> 这里面是点击到人物的信息</div>
    <div>

    </div>
  </div>
</template>
<script>
  let data=[
    {
      id:1,
      name:'leo'
    },
    {
      id:2,
      name:'duoduo'
    },
    {
      id:3,
      name:'momo'
    }
  ];
  export default {
    data(){
      return{
        users:data
      }
    },
    watch:{
      '$route':function () {
        let id=this.$route.params.id;
      }
    },
    mounted(){
      let id=this.$route.params.id;
    }
  }
</script>
