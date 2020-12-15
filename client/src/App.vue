<template>
  <div id="app">
    <b-container class="games-container">
      <b-row v-for="(game, i) in games" :key="i">
        <b-col>
          <Game :game="game" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Game from "./components/Game";
export default {
  name: "App",
  components: {
    Game,
  },
  data() {
    return {
      games: [],
    };
  },
  created() {
    fetch("http://localhost:5000/games", { methods: "get" })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        this.games = jsonData;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.games-container {
  margin: auto;
  width: 60%;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
.text-end {
  text-align: end;
}
</style>
