<template>
  <div class="todo__item">
    <!-- <small> {{ todos.id }} </small> -->
    <h3>{{ todos.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todos"],
};
</script>

<style lang="scss" scoped></style>
