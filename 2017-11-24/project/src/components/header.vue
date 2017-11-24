<template>
  <header class="header" >
    <h1>todos</h1>
    <input class="new-todo" placeholder="请输入内容"
           v-model="message"
           @keydown.13="addList" />
  </header>
</template>
<script>
  export default {
   data(){
     return{
       message:''
     }
   },
    methods :{
      addList(){
        this.$emit('add',this.message);
        this.message= '';
      }
    }
  }
</script>
<style></style>
