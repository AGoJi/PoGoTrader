<template>
  <div>
    <label for="shiny">
      <input type="checkbox" name="shiny" value="shiny" />Shiny
    </label>
    <label for="form">
      <select name="form" id="form">
        <option value="normal" selected>Normal</option>
        <option value="alola">Alola</option>
        <option value="galar">Galar</option>
      </select>
    </label>
    <input type="text" placeholder="Search Pokémon" />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
