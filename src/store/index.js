import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    user: null,
    availablePokes: null,
    filter: {
      searchPoke: "",

      form: "",
      shiny: null
    }
  },
  mutations: {
    setTitle: (state, payload) => (state.title = payload),
    setUser: (state, payload) => (state.user = payload),
    savePokes: (state, payload) => {
      state.availablePokes = Object.values(payload).map(pokemon => {
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
    },
    setFilter: (state, payload) => (state.filter = payload)
  },
  actions: {
    getData(context) {
      axios
        .get("/released_pokemon.json")
        .then(response => {
          //console.log(response);
          context.commit("savePokes", response.data);
        })
        .catch(function(error) {
          this.error = error;
        });
    }
  },
  getters: {
    getTitle: state => state.title,
    getUser: state => state.user,
    getPokes: state => state.availablePokes,
    getFilter: state => state.filter
  }
});
