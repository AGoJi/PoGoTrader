<template>
  <div>
    <h1>{{title}}</h1>
    <Menu />
  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  props: ["title"],
  components: {
    Menu
  }
};
</script>

<style>
</style>