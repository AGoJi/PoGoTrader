<template>
  <div>
    <v-app-bar color="red" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="display-1">{{getTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar v-if="getUser">
          <v-img :src="getUser.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content v-if="getUser">
          <v-list-item-title>{{getUser.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          v-bind:to="item.to"
          class="red--text"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", to: "/" },
        { title: "Trading Cards", to: "/availabletc" },
        { title: "Chats", to: "/chatrooms" },
        { title: "My Profile", to: "/myprofile" },
        { title: "Log In", to: "/login" }
        //{ title: "Sign Up", to: "/signup" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getTitle", "getUser"])
  }
};
</script>

<style>
</style>