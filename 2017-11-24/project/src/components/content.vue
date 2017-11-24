<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
      <li v-for="item in list" :class="{completed:item.checked}">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.checked"/>
          <label>{{item.title}}</label>
          <button class="destroy" @click="removeList(item.id)"></button>
        </div>
        <input class="edit" />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props:['list'],
  data(){
    return{
      itemId : ''
    }
  },
  methods:{
    removeList(item){
      this.$emit('remove',item)
    }
  }
}
</script>
