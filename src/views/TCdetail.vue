<template>
  <v-container>
    <Back />
    <div>
      <h2>Offering:</h2>
      <v-img :src="pokeInfo.avatar" alt="avatar" />
      <p>Pokémon: {{pokeInfo.offeredPoke}}</p>
      <p>Shiny: {{pokeInfo.shiny}}</p>
      <p>Form: {{pokeInfo.form}}</p>
      <p>Additional info: {{pokeInfo.offInfo}}</p>
    </div>
    <div>
      <h2>Looking for:</h2>
      <p>Pokémon(s): {{pokeInfo.lookingPoke}}</p>
      <p>Additional info: {{pokeInfo.lookInfo}}</p>
    </div>
    <div>
      <h2>Location:</h2>
      <p>{{pokeInfo.location}}</p>
    </div>
    <router-link class="link" to="/tradingscreen">
      <v-btn color="red">Let's Trade!</v-btn>
    </router-link>
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
          console.log(snapshot.val());

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