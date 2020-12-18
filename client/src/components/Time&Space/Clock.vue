<template>
  <div class="clock">
    <Live
      v-if="game.statusGame === 'In Play'"
      :isEnd="game.EndOfPeriod"
      :currentQuarter="currentQuarter"
      :clock="game.clock"
    />

    <Schedualed
      v-else-if="game.statusGame === 'Scheduled'"
      :start="game.startTimeUTC"
    />

    <Finished v-else-if="game.statusGame === 'Finished'" />
  </div>
</template>

<script>
import Live from "./Games/Live";
import Schedualed from "./Games/Schedualed";
import Finished from "./Games/Finished";
export default {
  components: {
    Live,
    Schedualed,
    Finished,
  },
  props: {
    game: Object,
  },
  data() {
    return {
      currentQuarter: "",
    };
  },
  mounted() {
    this.currentQuarter = this.game.currentPeriod.split("")[0];
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
</style>