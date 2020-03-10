<template>
  <li v-bind:class="{'completed': todo.completed}">
    <div class="form-check">
      <label class="form-check-label">
        <input
          class="checkbox"
          type="checkbox"
          :checked="todo.completed"
          v-on:change="markComplete"
        />
        {{todo.title}}
        <i class="input-helper"></i>
      </label>
    </div>
    <i @click="onClick" class="remove icon-trash" style="font-size: smaller;"></i>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["deleteTodo"]),
    ...mapActions(["markCompleted"]),
    onClick() {
      this.deleteTodo(this.todo.id);
    },
    markComplete() {
      this.markCompleted(this.todo.id);
    }
  }
};
</script>