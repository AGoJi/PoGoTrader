<template>
  <div>
    <div>
      <h2>Offering:</h2>
      <p>Pokémon:</p>
      <label for="pokemon">
        <select name="pokemon" id="pokemon">
          <option selected>Select Pokémon</option>
          <option value="pikachu">Pikachu</option>
        </select>
      </label>
      <p>Shiny:</p>
      <label>
        <input type="checkbox" name="yes" value="yes" />Yes
      </label>
      <label>
        <input type="checkbox" name="no" value="no" />No
      </label>
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
        <select name="pokemons" id="pokemons" multiple>
          <option value="pikachu">Pikachu</option>
          <option>...</option>
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
export default {};
</script>

<style>
</style>