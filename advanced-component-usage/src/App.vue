<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <appQuote quote="A wonderful Quote"></appQuote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";

export default {
  components: {
    appQuote: Quote,
  },
};
</script>

<style scoped></style>>
