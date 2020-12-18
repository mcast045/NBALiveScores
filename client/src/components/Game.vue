<template>
  <div class="space-between game-card" v-if="game">
    <div class="game-card-flex">
      <Team :team="game.hTeam" :is_visitor="false" />
      <Clock :game="game" />
      <Team :team="game.vTeam" :is_visitor="true" />
    </div>
    <Arena
      v-if="game.statusGame === 'In Play'"
      :arena="game.arena"
      :city="game.city"
    />
  </div>
</template>

<script>
  import Team from "./Teams/Team";
  import Arena from "./Time&Space/Arena";
  import Clock from "./Time&Space/Clock";
  export default {
    components: {
      Team,
      Clock,
      Arena,
    },
    props: {
      game: Object,
    },
  };
</script>

<style scoped>
.game-card {
  border-radius: 10px;
  background: #eee;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}
.game-card:hover {
  background: #ddd;
}
.game-card-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>