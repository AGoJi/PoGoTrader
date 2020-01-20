<template>
  <v-container>
    <h1 class="display-1 font-weight-bold">Welcome to PoGo Trader!</h1>
  </v-container>
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
