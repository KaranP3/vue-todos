<template>
  <form @submit="onSubmit">
    <div class="md-form add-items d-flex">
      <input
        v-model="title"
        type="text"
        id="toDoInput"
        class="form-control"
        placeholder="What do you need to do today?"
      />
      <button type="submit" class="btn btn-primary font-weight-bold todo-list-add-btn btn-md">Add</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();

      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false
      };

      this.addTodo(newTodo);
      this.title = "";
    }
  }
};
</script>
