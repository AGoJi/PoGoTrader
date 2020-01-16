<template>
  <v-app>
    <Header v-bind:title="title" />
    <v-content class="yellow lighten-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import { mapActions } from "vuex";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "{View title}"
    };
  },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped></style>
