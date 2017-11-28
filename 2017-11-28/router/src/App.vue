<template>
  <div id="app">
   <ul>
     <li>
       <router-link to="/" tag="p">home</router-link>
     </li>
     <li>
       <router-link to="/bonent" tag="p">bonent</router-link>
     </li>
     <li>
       <router-link to="/miaov" tag="p" exact>miaov</router-link>
       <!--<ul>-->
         <!--<li>-->
           <!--<router-link :to="{ name:'Vip'}">vip</router-link>-->
         <!--</li>-->
         <!--<li>-->
           <!--<router-link :to="{ name:'FuFei'}">付费</router-link>-->
         <!--</li>-->
         <!--<li>-->
           <!--<router-link :to="{ name:'PuTong'}">普通</router-link>-->
         <!--</li>-->
       <!--</ul>-->
     </li>
   </ul>
    <p>下面这个标签是vue-route提供的,告诉匹配到的路径，组件应该渲染在这个位置</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
/*.router-link-active{*/
  /*background:yellow;*/
/*}*/

  ul li{
    list-style:none;
    margin:0;
    padding:0;
  }
</style>
