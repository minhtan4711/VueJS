<template>
  <div class="component">
    <h1>The user component</h1>
    <p>I'm a awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is {{ name }}</p>
    <p>Age: {{ userAge }}</p>
    <hr />
    <div class="row">
      <div class="user-detail">
        <UserDetail
          :name="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="userAge"
        ></UserDetail>
        <!--dùng v-bind ở đây để lấy giá trị của name ở dưới-->
      </div>
      <div class="user-edit">
        <UserEdit :userAge="userAge" @ageWasEdited="userAge = $event"></UserEdit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

export default {
  data() {
    return {
      name: "Tan", //lấy thuộc tính name ở đây và truyền vào trong props ở child component
      userAge: 27,
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "Tan";
    },
  },
  components: {
    UserDetail,
    UserEdit,
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
.row {
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 100%;
}
</style>