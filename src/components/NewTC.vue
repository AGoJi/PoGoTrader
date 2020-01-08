<template>
  <div>
    <div>
      <h2>Offering:</h2>
      <p>Pokémon:</p>
      <v-autocomplete label="Search Pokémon" :items="availablePokes"></v-autocomplete>
      <p>Shiny:</p>
      <v-switch v-model="shiny"></v-switch>
      <p>Form:</p>
      <label for="form">
        <select name="form" id="form">
          <option value="normal" selected>Normal</option>
          <option value="alola">Alola</option>
          <option value="galar">Galar</option>
        </select>
      </label>
      <p>Additional info:</p>
      <input type="text" placeholder="Add relevant info" />
    </div>
    <div>
      <h2>Looking for:</h2>
      <p>Pokémon(s):</p>
      <label for="pokemons">
        <select name="pokemons" id="pokemons">
          <option
            v-for="(availablePoke, i) in availablePokes"
            v-bind:key="`availablePoke-${i}`"
          >{{availablePoke}}</option>
        </select>
      </label>
      <p>Additional info:</p>
      <input type="text" placeholder="Add relevant info" />
    </div>
    <div>
      <h2>Location:</h2>
      <p>Set location and travel radius:</p>
    </div>
    <button>Create Trading Card</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      availablePokes: ["Charmander", "Bulbasaur", "Squirtle", "Pikachu"],
      shiny: false
    };
  }
};
</script>

<style>
</style>