<template>
  <div>
    <Back />
    <div>
      <h1>{{id}}</h1>
      <!--id=k-->
      <h2>Offering:</h2>
      <p>Pokémon:</p>
      <p>Shiny:</p>
      <p>Form:</p>
      <p>Additional info:</p>
    </div>
    <div>
      <h2>Looking for:</h2>
      <p>Pokémon(s):</p>
      <p>Additional info:</p>
    </div>
    <div>
      <h2>Location:</h2>
      <p></p>
    </div>
    <router-link to="/tradingscreen">Let's trade!</router-link>
  </div>
</template>

<script>
import dataBase from "@/dataBase";
import Back from "../components/Back";
import { mapMutations } from "vuex";
export default {
  components: {
    Back
  },
  props: {
    id: String
  },
  methods: {
    ...mapMutations(["setTitle"]),
    getCards() {
      let that = this;
      dataBase
        .database()
        .ref("cards/")
        .on("value", snapshot => {
          console.log(snapshot.val());

          that.cards = snapshot.val();
        });
    }
  },
  created() {
    this.setTitle("Card Detail");
    this.getCards();
  }
};
</script>

<style>
</style>