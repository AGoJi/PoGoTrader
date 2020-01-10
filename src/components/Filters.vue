<template>
  <div>
    <h2>Filters</h2>
    <v-row>
      <v-col cols="12" md="4">
        <v-autocomplete v-model="filteredPoke" label="Search Pokémon"></v-autocomplete>
      </v-col>
      <v-col cols="12" md="4">
        <v-select :items="forms" v-model="form" label="Pokémon form"></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-switch v-model="shiny" label="Shiny"></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filteredPoke: "",
      forms: ["Normal", "Alola", "Galar"],
      form: "Normal",
      shiny: false
    };
  }
};
</script>

<style></style>
