<template>
  <div id="app">
    <button >按钮</button>
    <p>num的初始值:{{num}}</p>
    <button @click="change">按钮1</button>
    <p>改变的值：{{gaibian}}</p>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import helloWorld from './components/HelloWorld.vue'
  export default {
    data(){
      return{
        num: this.$store.state.n
      }
    },
    computed:{  // 属性计算
      gaibian(){
        return this.$store.state.n  //依赖，将想改变的值添加依赖，这样就能改变
      }
    },
    methods:{ // 方法
      change(){
        this.$store.commit('changeS',30)
      }
    },
    components:{ //组件
      helloWorld
    }
  }
</script>

