<template>
  <div class="container">
    <div class="row container d-flex justify-content-center">
      <div class="col-lg-12">
        <div class="card px-3 z-depth-2">
          <div class="card-body">
            <h4 class="card-title">Tasks</h4>
            <AddTodo v-on:add-todo="addTodo"></AddTodo>
            <div class="list-wrapper">
              <ul
                v-bind:key="todo.id"
                v-for="todo in todos"
                class="d-flex flex-column-reverse todo-list"
              >
                <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"></TodoItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    AddTodo,
    TodoItem
  },
  props: ["todos"],
  methods: {
    addTodo(newTodo) {
      this.$emit("add-todo", newTodo);
    }
  }
};
</script>

<style scoped>
</style>