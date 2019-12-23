<template>
  <div>
    <h1>{{title}}</h1>
    <Menu />
    <Back />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Back from "../components/Back";
export default {
  props: ["title"],
  components: {
    Menu,
    Back
  }
};
</script>

<style>
</style>