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
      v-for="(v,i) in filteredCards"
      :key="i+'offeredPoke'"
      :to="'/tcdetail/' + v.id"
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
      filter: {
        name: "",
        shiny: null,
        form: ""
      }
    };
  },
  methods: {
    getCards() {
      let that = this;
      dataBase
        .database()
        .ref("cards/")
        .on("value", snapshot => {
          let cards = snapshot.val();
          for (let key in cards) {
            cards[key]["id"] = key;
          }

          let arrayedCards = Object.values(cards);

          that.cards = arrayedCards;
        });
    }
  },
  created() {
    this.getCards();
  },
  computed: {
    ...mapGetters(["getFilter"]),
    filteredCards() {
      return this.cards
        .filter(card => {
          return card.offeredPoke.includes(this.getFilter.searchPoke);
        })
        .filter(card => card.form.includes(this.getFilter.form))
        .filter(card =>
          this.getFilter.shiny != null
            ? card.shiny == this.getFilter.shiny
            : card
        );
    }
  }
};
</script>

<style>
</style>