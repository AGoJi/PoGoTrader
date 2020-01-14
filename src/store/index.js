import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    user: null
  },
  mutations: {
    setTitle: (state, payload) => (state.title = payload),
    setUser: (state, payload) => (state.user = payload)
  },
  actions: {},
  getters: {
    getTitle: state => state.title,
    getUser: state => state.user
  }
});
