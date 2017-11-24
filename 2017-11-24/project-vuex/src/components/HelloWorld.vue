<template>
  <div class="">
    <span > {{gaibian}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      abc: this.$store.state.n
    }
  },
  computed:{
    gaibian(){
      return this.$store.state.n
    }
  },
}
</script>

