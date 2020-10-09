<template>
  <div class="addTodo__item">
    <input
      type="text"
      placeholder="Add New Todo"
      name="add-todo"
      v-model="title"
    />
    <!-- <p>{{ title }}</p> -->
    <button @click="addTodo" type="submit">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ["todos"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: this.todos.length + 1,
        title: this.title,
        completed: false,
      };

      this.$emit("add-new-todo", newTodo);
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
