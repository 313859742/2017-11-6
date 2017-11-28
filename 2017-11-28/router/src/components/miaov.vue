<template>
  <div>
    这是miaov的页面
    <!--<router-view/>-->
    <div>
      <router-link to="/miaov/123">leo</router-link>
      <router-link to="/miaov/456">momo</router-link>
    </div>
    <div>
      <p> 用户名：{{u.name}} </p>
      <p> 年龄：{{u.age}} </p>
    </div>
  </div>
</template>
<script>
  //
  let miaovs=[
    {
      id:123,
      name:'leo',
      age:30
    },
    {
      id:456,
      name:'momo',
      age:28
    }
  ];
  // 生命周期
  export default {
    data(){
      return{
        u:{
          name:'xxxx',
          age:'xx'
        }
      }
    },
    //监控$route的变化，再去那数据
    // watch监控路由信息对象，
    watch:{
      '$route':function () {
        let id=this.$route.params.id;
        this.u=miaovs.filter(item =>item.id == id)[0]
      }
    },
    //生命周期，这个组件触发，说明加载完成
    mounted(){
      console.log(this.$route.params)
      let id=this.$route.params.id;
      this.u=miaovs.filter(item =>item.id == id)[0]
    }
  }
</script>

