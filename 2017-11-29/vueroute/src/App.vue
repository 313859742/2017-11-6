<template>
  <div id="app">
  <transition name="fade">
    <router-view/>
  </transition>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
  .fade-enter-to{
    opacity: 1;
  }
  .fade-enter-active{
    transition: 1s;
  }

  .fade-leave{
    opacity: 1;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition: 1s;
  }
</style>
