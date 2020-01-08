<template>
  <div>
    <v-app-bar color="red" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="display-2">{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
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
export default {
  props: ["title"],
  components: {},
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", to: "/" },
        { title: "Trading Cards", to: "/availabletc" },
        { title: "Chats", to: "/chatrooms" },
        { title: "My Profile", to: "/myprofile" },
        { title: "Log In", to: "/login" },
        { title: "Sign Up", to: "/signup" }
      ]
    };
  }
};
</script>

<style>
</style>