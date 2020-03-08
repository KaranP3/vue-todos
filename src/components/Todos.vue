<template>
  <div class="container">
    <div class="row container d-flex justify-content-center">
      <div class="col-lg-12">
        <div class="card px-3 z-depth-1">
          <div class="card-body">
            <h4 class="card-title">vue-todos</h4>
            <TodoInput></TodoInput>
            <div class="list-wrapper">
              <ul
                v-bind:key="todo.id"
                v-for="todo in todos"
                class="d-flex flex-column-reverse todo-list"
              >
                <TodoItem
                  v-bind:todo="todo"
                  v-on:del-todo="$emit('del-todo', todo.id)"
                ></TodoItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoInput,
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
/* .todo-table{
        height: 300px;
        overflow-y: auto;
        width: 50%;
    } */
</style>