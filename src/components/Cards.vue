<template>
  <v-container>
    <h2>Available Trading Cards</h2>
    <v-card
      class="ma-3"
      max-width="400"
      v-for="(v,k,i) in cards"
      :key="i+'offeredPoke'"
      :to="'/tcdetail/' + k"
    >
      <v-img class="white--text align-end" height="250px" :src="v.avatar" alt="avatar"></v-img>
      <v-card-title>{{v.offeredPoke}}</v-card-title>
      <v-card-subtitle class="pb-0">{{v.location}}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import dataBase from "@/dataBase";
export default {
  data() {
    return {
      cards: []
    };
  },
  methods: {
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
    this.getCards();
  }
};
</script>

<style>
</style>