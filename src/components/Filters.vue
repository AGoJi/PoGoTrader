<template>
  <v-container>
    <h2>Filters</h2>
    <v-row>
      <v-col cols="12" md="4">
        <v-autocomplete
          :items="this.getPokes"
          item-text="name"
          item-value="name"
          v-model="searchPoke"
          label="Search Pokémon"
          @change="filter"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="4">
        <v-select :items="forms" v-model="form" label="Pokémon form"></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-switch v-model="shiny" label="Shiny"></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchPoke: "",
      forms: ["Normal", "Alola", "Galar"],
      form: "Normal",
      shiny: false
    };
  },
  computed: {
    ...mapGetters(["getPokes"])
  },
  methods: {
    ...mapMutations(["setFilter"]),
    filter() {
      this.setFilter(this.searchPoke);
    }
  }
};
</script>

<style></style>
