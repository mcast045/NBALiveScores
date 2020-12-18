<template>
  <div>
    <div class="center">Q{{ currentQuarter }}</div>
    <div v-if="!+isEnd">{{ clock }}</div>
    <div v-else-if="+isEnd && currentQuarter === '2'">Halftime</div>
    <div v-else>0:00</div>
  </div>
</template>

<script>
export default {
  props: {
    isEnd: String,
    status: String,
    currentQuarter: String,
    clock: String,
  },
};
</script>