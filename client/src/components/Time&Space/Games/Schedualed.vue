<template>
  <div>
    <div class="center">Starts</div>
    <div>{{ startTime }}</div>
  </div>
</template>

<script>
export default {
  props: {
    start: String,
  },
  computed: {
    startTime() {
      const gameDay = new Date(this.start);
      const localTime = gameDay.toLocaleTimeString();
      return `${localTime.slice(0, 4)} ${localTime.slice(
        localTime.length - 2
      )}`;
    },
  },
};
</script>