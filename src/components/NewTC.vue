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
                :items="pokeList"
                item-text="name"
                item-value="name"
                v-model="offeredPoke"
              ></v-autocomplete>
              <v-switch v-model="shiny" label="Shiny"></v-switch>
              <v-select v-model="form" :items="forms" label="Select Pokémon form"></v-select>
              <v-text-field label="Add relevant info about the offered Pokémon" v-model="offInfo"></v-text-field>
            </div>
            <div>
              <h2>Looking for:</h2>
              <p>Pokémon(s):</p>
              <v-autocomplete
                v-model="selectedPokes"
                :disabled="isUpdating"
                :items="pokeList"
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
              <!--  -->
              <v-text-field
                label="Add relevant info about the Pokémon(s) you're looking for"
                v-model="lookInfo"
              ></v-text-field>
            </div>
            <div>
              <h2>Location:</h2>
              <p>MAP API</p>
              <p>Set location and travel radius:</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="newTCpopup = false">Close</v-btn>
            <v-btn color="red" text @click="newTCpopup = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newTCpopup: false,
      availablePokes: {},
      shiny: false,
      offeredPoke: "",
      forms: ["Normal", "Alola", "Galar"],
      form: "Normal",
      offInfo: "",
      lookInfo: "",
      selectedPokes: [],
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
    getData() {
      axios
        .get("/released_pokemon.json")
        .then(response => {
          this.availablePokes = response.data;
        })
        .catch(function(error) {
          this.error = error;
        });
    }
  },
  computed: {
    pokeList() {
      return Object.values(this.availablePokes).map(pokemon => {
        let pokeid = pokemon.id;
        if (pokeid < 100) {
          pokeid = "0" + pokeid;
        }
        if (pokeid < 10) {
          pokeid = "0" + pokeid;
        }

        return {
          id: pokemon.id,
          name: pokemon.name,
          avatar: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeid}.png`
        };
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style></style>
