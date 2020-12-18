<template>
  <div class="team-score" :class="textAlign">
    {{ team.score.points }}
  </div>
</template>

<script>
  export default {
    props: {
      is_visitor: Boolean,
      team: Object,
    },
    data() {
      return {
        textAlign: "",
      };
    },
    mounted() {
      if (this.is_visitor) this.textAlign = "text-end";
    },
  };
</script>

<style scoped>
.team-score {
  font-size: 2rem;
}
</style>