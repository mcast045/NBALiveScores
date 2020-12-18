<template>
  <main id="app">
    <b-container class="games-container">
      <b-row v-for="(game, i) in games" :key="i">
        <b-col>
          <Game :game="game" />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Game from "./components/Game";
import axios from "axios";
import config from "./config/rapidAPI";
export default {
  name: "App",
  components: {
    Game,
  },
  data() {
    return {
      games: [],
      todayDate: "",
    };
  },
  methods: {
    getGameDay(date) {
      const today = date.slice(0, 10);
      return `${today.slice(0, 4)}-${today.slice(5, 7)}-${today.slice(8)}`;
    },
    async getLiveGames(config) {
      const resLive = await axios.get(
        "https://api-nba-v1.p.rapidapi.com/games/live/",
        { headers: config }
      );
      this.games = resLive.data.api.games;

      //Format Date
      const resDate = new Date(resLive.headers.date);
      console.log(resLive.headers.date);
      this.todayDate = this.getGameDay(resDate.toISOString());

      this.getSchedualedGames(config);
    },
    async getSchedualedGames(config) {
      const resSchedule = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/games/date/${this.todayDate}`,
        { headers: config }
      );
      const scheduale = resSchedule.data.api.games;
      const nonLiveGames = [];
      for (let i = 0; i < scheduale.length; i++) {
        if (
          this.games.findIndex(
            (game) => scheduale[i].gameId === game.gameId
          ) === -1
        )
          nonLiveGames.push(scheduale[i]);
      }
      this.games.push(...nonLiveGames);
    },
  },
  async mounted() {
    this.getLiveGames(config);
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
.center {
  text-align: center;
}
</style>
