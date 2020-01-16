<template>
  <v-container>
    <Filters />
    <NewTC />
    <Cards />
  </v-container>
</template>

<script>
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import NewTC from "../components/NewTC";
import { mapMutations } from "vuex";

export default {
  components: {
    Filters,
    Cards,
    NewTC
  },
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("Trading Cards");
  }
};
</script>

<style></style>
