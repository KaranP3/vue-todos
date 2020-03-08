<template>
  <li v-bind:class="{'completed': todo.completed}">
    <div class="form-check">
      <label class="form-check-label">
        <input class="checkbox" type="checkbox" :checked="todo.completed" v-on:change="markComplete"/>
        {{todo.title}}
        <i class="input-helper"></i>
      </label>
    </div>
    <i @click="$emit('del-todo', todo.id)" class="remove icon-trash" style="font-size: smaller;"></i>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"], 
  methods: {
      markComplete(){
          this.todo.completed = !this.todo.completed
      }
  }
};
</script>

<style lang="stylus" scoped></style>