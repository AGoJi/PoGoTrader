<template>
  <v-app>
    <Header v-bind:title="title" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "{View title}"
    };
  }
};
</script>
<style scoped></style>
