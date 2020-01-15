<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="newTCpopup" width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="red" v-on="on">New Trading Card</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Create new Trading Card</span>
          </v-card-title>
          <v-card-text>
            <div>
              <h2>Offering:</h2>
              <v-autocomplete
                label="Search the Pokémon you are offering"
                :items="this.getPokes"
                item-text="name"
                item-value="name"
                v-model="offeredPoke"
              ></v-autocomplete>
              <v-switch v-model="shiny" label="Shiny"></v-switch>
              <v-select v-model="form" :items="forms" label="Select Pokémon form"></v-select>
              <v-text-field label="Offered Pokémon info" v-model="offInfo"></v-text-field>
            </div>
            <div>
              <h2>Looking for:</h2>
              <p>Pokémon(s):</p>
              <v-autocomplete
                v-model="selectedPokes"
                :disabled="isUpdating"
                :items="this.getPokes"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    <v-avatar left>
                      <v-img :src="data.item.avatar"></v-img>
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <v-list-item-avatar>
                    <img :src="data.item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
              <v-text-field label="Looking for Pokémon(s) info" v-model="lookInfo"></v-text-field>
            </div>
            <div>
              <v-text-field label="Continent, country, state and city" v-model="location"></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="newTCpopup = false">Close</v-btn>
            <v-btn color="red" text @click="postCard">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import dataBase from "@/dataBase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newTCpopup: false,
      shiny: false,
      offeredPoke: "",
      forms: ["Normal", "Alola", "Galar"],
      form: "Normal",
      offInfo: "",
      lookInfo: "",
      selectedPokes: [],
      location: "",
      isUpdating: false,
      error: null
    };
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  methods: {
    remove(item) {
      const index = this.selectedPokes.indexOf(item.name);
      if (index >= 0) this.selectedPokes.splice(index, 1);
    },
    postCard() {
      this.newTCpopup = false;
      let avatar = this.getPokes.find(poke => {
        return poke.name == this.offeredPoke;
      }).avatar;
      let card = {
        offeredPoke: this.offeredPoke,
        shiny: this.shiny,
        form: this.form,
        offInfo: this.offInfo,
        lookingPoke: this.selectedPokes,
        lookInfo: this.lookInfo,
        location: this.location,
        avatar,
        user: this.getUser.id
      };
      dataBase
        .database()
        .ref("cards")
        .push(card);
    }
  },
  computed: {
    ...mapGetters(["getUser", "getPokes"])
  },
  created() {}
};
</script>

<style></style>
