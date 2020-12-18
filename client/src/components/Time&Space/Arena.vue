<template>
  <div class="arena-container">
    <div class="arena">Arena: {{ arena }}</div>
    <div>Home: {{ city }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      city: String,
      arena: String,
    },
  };
</script>

<style scoped>
.arena-container {
  align-self: center;
  text-align: center;
}
</style>