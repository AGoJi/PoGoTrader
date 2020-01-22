<template>
  <v-container>
    <h2>Filters</h2>
    <v-row>
      <v-col cols="12" md="3">
        <v-autocomplete
          :items="this.getPokes"
          item-text="name"
          item-value="name"
          v-model="pokeFilter.searchPoke"
          label="Search Pokémon"
          @change="filter"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3">
        <v-select :items="forms" v-model="pokeFilter.form" label="Pokémon form" @change="filter"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-switch v-model="pokeFilter.shiny" label="Shiny" @change="filter"></v-switch>
      </v-col>
      <v-col>
        <v-layout justify-center>
          <v-flex xs4>
            <v-btn color="red" @click="resetFilter">Reset filter</v-btn>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      forms: ["Normal", "Alola", "Galar"],
      pokeFilter: {
        searchPoke: "",
        form: "",
        shiny: null
      }
    };
  },
  computed: {
    ...mapGetters(["getPokes"])
  },
  methods: {
    ...mapMutations(["setFilter"]),
    filter() {
      this.setFilter(this.pokeFilter);
    },
    resetFilter() {
      this.pokeFilter = {
        searchPoke: "",
        form: "",
        shiny: null
      };
      this.setFilter(this.pokeFilter);
    }
  }
};
</script>

<style></style>
