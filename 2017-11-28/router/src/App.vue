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
       <router-link to="/miaov" tag="p">miaov</router-link>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
