<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <router-link to="/login" tag="span" v-if="!isLogin">登录</router-link>
        <!--v-if="!isLogin" 没有登陆时显示登陆  v-if="isLogin"显示头衔-->
        <img  src="../assets/portrait.png" alt="" v-if="isLogin">
      </div>

    </div>
    <div class="phrase">
      一起学习Vue-router
    </div>
    <div class="btns">
      <router-link to="/backend/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/backend/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name:'name',
    computed: {
      isLogin() {
        let o = JSON.parse(localStorage.getItem('isLogin')) || {}
        return !!o.login  // !! 转成布尔值，一个感叹号取反
      }
    }
//    data(){
//      return{
//        isLogin:false  // 一开始设置，默认是没登录的
//      }
//    }
  }
</script>
