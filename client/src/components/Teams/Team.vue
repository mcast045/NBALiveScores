<template>
  <div class="team-info" :class="reverseDisplay">
    <div>
      <Logo
        v-if="team.logo"
        :image="team.logo"
        :is_visitor="is_visitor"
      />
      <Name :team="team" :is_visitor="is_visitor" />
    </div>
    <Score :team="team" :is_visitor="is_visitor" />
  </div>
</template>

<script>
import Logo from "./Logo";
import Name from "./Name";
import Score from "./Score";
export default {
  components: {
    Logo,
    Name,
    Score,
  },
  data() {
    return {
      reverseDisplay: "",
    };
  },
  props: {
    team: Object,
    is_visitor: Boolean,
  },
  mounted() {
    if (this.is_visitor) this.reverseDisplay = "reverseDisplay";
  },
};
</script>

<style scoped>
.team-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
}
.reverseDisplay {
  flex-direction: row-reverse;
}
</style>