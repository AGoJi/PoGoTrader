<template>
  <div>
    <Filters />
    <Cards />
    <p>New Trading Card (POPUP)</p>
    <NewTC />
  </div>
</template>

<script>
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import NewTC from "../components/NewTC";

export default {
  components: {
    Filters,
    Cards,
    NewTC
  }
};
</script>

<style></style>
