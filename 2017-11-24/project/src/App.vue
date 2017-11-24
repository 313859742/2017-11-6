<template>
  <section class="todoapp" id="app">
    <header-vue @add="addTodoList"></header-vue>
    <content-vue :list="list" @remove="removeTodoList"></content-vue>
    <footer-vue></footer-vue>
  </section>
</template>
<script>
  import headerVue from './components/header.vue';
  import contentVue from './components/content.vue';
  import footerVue from './components/footer.vue';
  let data = [
    {
      id: Date.now() + Math.random(),
      title: '这是假数据1',
      checked: false
    },
    {
      id: Date.now() + Math.random(),
      title: '这是假数据2',
      checked: true
    }
  ];

export default {
  data(){
    return {
      list:data
    }
  },
  methods :{
    addTodoList(message) {
      this.list.push({
        id: Date.now() + Math.random(),
        title:message,
        checked: false
      });
    },
    removeTodoList(item){
      this.list.splice( item ,1);
    }
  },
  components : {
    headerVue,
    contentVue,
    footerVue
  }

}
</script>

