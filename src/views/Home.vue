<template>
  <div>
    <h1>Welcome to PoGo Trader!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam harum veritatis voluptates minus voluptas enim modi amet eligendi, distinctio eum vitae facere magnam natus doloribus eius est, esse tempore. Modi?</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("Home");
  }
};
</script>
<style scoped></style>
