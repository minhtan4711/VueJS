<template>
  <div id="app">
    <Todo></Todo>
  </div>
</template>

<script>
import Todo from "./components/Todo";
export default {
  components: {
    Todo,
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 50%;
  height: 100vh;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
