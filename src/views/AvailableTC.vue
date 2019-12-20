<template>
  <div>
    <div>
      <h2>Available Trading Cards</h2>
    </div>
    <Menu />
    <Filters />
    <Cards />
  </div>
</template>

<script>
import Filters from "../components/Filters";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
export default {
  components: {
    Filters,
    Menu,
    Cards
  }
};
</script>

<style></style>
