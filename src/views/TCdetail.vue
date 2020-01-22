<template>
  <v-container>
    <Back />
    <v-card color="red accent-1">
      <v-img class="black--text align-end" height="280px" :src="pokeInfo.avatar" alt="avatar">
        <v-card-title>{{pokeInfo.offeredPoke}}</v-card-title>
      </v-img>
      <v-card-text class="text--primary">
        <div>
          <span class="font-weight-bold">Shiny:</span>
          {{pokeInfo.shiny}}
        </div>
        <div>
          <span class="font-weight-bold">Form:</span>
          {{pokeInfo.form}}
        </div>
        <div>
          <span class="font-weight-bold">Additional info:</span>
          {{pokeInfo.offInfo}}
        </div>
        <div class="font-weight-bold title">Looking for:</div>
        <div>
          <span class="font-weight-bold">Pokémon(s):</span>
          {{pokeInfo.lookingPoke}}
        </div>
        <div>
          <span class="font-weight-bold">Additional info:</span>
          {{pokeInfo.lookInfo}}
        </div>
        <div class="font-weight-bold title">Location:</div>
        <div>{{pokeInfo.location}}</div>
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center>
          <v-flex xs6>
            <router-link class="link" to="/tradingscreen">
              <v-btn color="red">Let's Trade!</v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import dataBase from "@/dataBase";
import Back from "../components/Back";
import { mapMutations } from "vuex";
export default {
  components: {
    Back
  },
  data() {
    return {
      pokeInfo: {}
    };
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
        .ref("cards/" + this.id)
        .once("value", snapshot => {
          that.pokeInfo = snapshot.val();
        });
    }
  },
  created() {
    this.setTitle("Card Detail");
    this.getCards();
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>