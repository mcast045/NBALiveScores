<template>
  <div class="team-name">
    <div :class="textAlign">
      {{ fullNameArr.join(" ") }}
    </div>
    <div :class="textAlign">
      {{ team.nickName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: Object,
    is_visitor: Boolean,
  },
  data() {
    return {
      fullNameArr: [],
      textAlign: "",
    };
  },
  mounted() {
    this.fullNameArr = this.team.fullName.split(" ");
    this.fullNameArr.pop();
    if (this.is_visitor) this.textAlign = "text-end";
  },
};
</script>