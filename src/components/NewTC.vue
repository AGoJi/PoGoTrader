<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="newTCpopup" width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="red" v-on="on">New Trading Card</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Create new Trading Card</span>
          </v-card-title>
          <v-card-text>
            <div>
              <h2>Offering:</h2>
              <v-autocomplete
                label="Search the Pokémon you are offering"
                :items="availablePokes"
                v-model="offeredPoke"
              ></v-autocomplete>
              <v-switch v-model="shiny" label="Shiny"></v-switch>
              <v-select v-model="form" :items="forms" label="Select Pokémon form"></v-select>
              <v-text-field label="Add relevant info about the offered Pokémon" v-model="offInfo"></v-text-field>
            </div>
            <div>
              <h2>Looking for:</h2>
              <p>Pokémon(s):</p>
              <!--<label for="pokemons">
                <select name="pokemons" id="pokemons">
                  <option
                    v-for="(availablePoke, i) in availablePokes"
                    v-bind:key="`availablePoke-${i}`"
                  >{{availablePoke}}</option>
                </select>
              </label>-->
              <v-text-field
                label="Add relevant info about the Pokémon(s) you're looking for"
                v-model="lookInfo"
              ></v-text-field>
            </div>
            <div>
              <h2>Location:</h2>
              <p>MAP API</p>
              <p>Set location and travel radius:</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="newTCpopup = false">Close</v-btn>
            <v-btn color="red" text @click="newTCpopup = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTCpopup: false,
      availablePokes: ["Charmander", "Bulbasaur", "Squirtle", "Pikachu"],
      shiny: false,
      offeredPoke: "",
      forms: ["Normal", "Alola", "Galar"],
      form: "Normal",
      offInfo: "",
      lookInfo: ""
    };
  }
};
</script>

<style>
</style>