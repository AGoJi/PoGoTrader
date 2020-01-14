<template>
  <div>
    <h2>General</h2>
    <h3>My Chat Rooms</h3>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("Chats");
  }
};
</script>

<style>
</style>