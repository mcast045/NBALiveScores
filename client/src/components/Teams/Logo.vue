<template>
  <div class="logo-container" :class="isFlexEnd">
    <b-img class="logo" :src="image" fluid alt="Responsive image"></b-img>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    is_visitor: Boolean,
  },
  data() {
    return {
      isFlexEnd: "",
    };
  },
  mounted() {
    if (this.is_visitor) this.isFlexEnd = "flex-end";
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
}
.logo-container .logo {
  width: 3rem;
  height: 2.5rem;
}
.flex-end {
  justify-content: flex-end;
}
</style>