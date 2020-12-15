<template>
  <div class="clock">
    <div v-if="isEnd && currentQuarter === '4'">Final</div>

    <div v-else>
      <div class="center">Q{{ currentQuarter }}</div>
      <div v-if="!isEnd">{{ clock }}</div>
      <div v-else>0:00</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clock: String,
    quarter: String,
    isEnd: Number,
  },
  data() {
    return {
      currentQuarter: "",
    };
  },
  mounted() {
    this.currentQuarter = this.quarter.split("")[0];
  },
};
</script>

<style scoped>
.clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center {
  text-align: center;
}
</style>