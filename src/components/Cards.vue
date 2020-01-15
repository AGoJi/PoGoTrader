<template>
  <div>
    <h2>Available Trading Cards</h2>
    <!--<router-link to="/tcdetail/1">Pokémon name (DETAIL 1)</router-link>
    <router-link to="/tcdetail/2">Pokémon name (DETAIL 2)</router-link>
    <router-link to="/tcdetail/3">Pokémon name (DETAIL 3)</router-link>-->
    <router-link v-for="(v,k,i) in cards" :key="i+'offeredPoke'" :to="'/tcdetail/' + k">
      <div class="offeredPoke">
        <img :src="v.avatar" alt="avatar" />
        <p>
          <span>{{v.offeredPoke}}</span>
          : {{v.location}}
        </p>
      </div>
    </router-link>
  </div>
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