<template>
  <div id="app">
    <ul class="ul-li">
      <li> <a href="/">home</a>
        <router-link to="/">home</router-link>
      </li>
      <li> <a href="/aboute">aboute</a>
        <router-link to="/aboute">aboute</router-link>

      </li>
      <li> <a href="/miaov">miaov</a>
        <router-link to="miaov">miaov</router-link>

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
