<template>
  <v-container>
    <h2>Available Trading Cards</h2>
    <p v-if="cards.length==0">LOADING...</p>
    <!--<p v-else-if="result.length == 0">SORRY, WE COULD'NT FIND ANY RESULTS MATCHING.</p>-->
    <v-card
      color="red accent-1"
      :elevation="5"
      class="ma-3"
      max-width="400"
      v-for="(v,k,i) in filteredCards"
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cards: [],
      search: ""
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
  },
  computed: {
    ...mapGetters(["getFilter"]),
    filteredCards() {
      let result = {};
      if (this.getFilter == "") {
        return this.cards;
      }
      for (let key in this.cards) {
        if (this.cards[key].offeredPoke == this.getFilter) {
          result[key] = this.cards[key];
        }
      }
      return result;
    }
  }
};
</script>

<style>
</style>