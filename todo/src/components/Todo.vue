<template>
  <div class="addTodo__item">
    <AddTodo :todos="todos" @add-new-todo="handleAddNewTodo"></AddTodo>
  </div>
  <!-- <template class="todo__content" v-for="todo in todos" :key="todo.id">
    <TodoItem :todos="todo"></TodoItem>
  </template> -->
</template>

<script>
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
const axios = require("axios");
export default {
  data() {
    return {
      todos: [],
    };
  },
  name: "Todo",
  components: {
    AddTodo,
    TodoItem,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res) => {
          this.todos = res.data;
        });
    },
    handleAddNewTodo(newTodo) {
      // console.log("12");
      this.todos.unshift(newTodo);
    },
  },
};
</script>

<style lang="scss" scoped></style>
