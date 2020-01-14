<template>
  <div>
    <Back />
    <div>
      <h1>{{id}}</h1>
      <h2>Offering:</h2>
      <p>Pokémon: {{item.offering}}</p>
      <p>Shiny: {{item.shiny}}</p>
      <p>Form: {{item.form}}</p>
      <p>Additional info: {{item.info}}</p>
    </div>
    <div>
      <h2>Looking for:</h2>
      <p>Pokémon(s): {{item.looking}}</p>
      <p>Additional info: {{item.lookinfo}}</p>
    </div>
    <div>
      <h2>Location:</h2>
      <p>{{item.location}}</p>
    </div>
    <router-link to="/tradingscreen">Let's trade!</router-link>
  </div>
</template>

<script>
import Back from "../components/Back";
import { mapMutations } from "vuex";
export default {
  components: {
    Back
  },
  props: {
    id: String
  },
  data() {
    return {
      item: {
        offering: "Pikachu",
        shiny: "Yes",
        form: "Normal",
        offinfo: "blablabla",
        looking: ["Charmander"],
        lookinfo: "blebleble",
        location: "Igualada"
      }
    };
  },
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("Card Detail");
  }
};
</script>

<style>
</style>