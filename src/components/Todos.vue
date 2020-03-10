<template>
  <div class="container">
    <div class="row container d-flex justify-content-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-10">
        <div class="card px-3 z-depth-3">
          <div class="card-body">
            <h4 class="card-title">Tasks</h4>
            <AddTodo></AddTodo>
            <div class="list-wrapper">
              <ul
                v-bind:key="todo.id"
                v-for="todo in todos"
                class="d-flex flex-column-reverse todo-list"
              >
                <TodoItem v-bind:todo="todo"></TodoItem>
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
  props: ["todos"]
};
</script>