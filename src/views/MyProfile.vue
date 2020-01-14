<template>
  <div>
    <v-card class="mx-auto" max-width="434" tile>
      <v-img height="100%" src="@/assets/profilecard.jpg">
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="128" tile>
              <v-img :src="getUser.avatar" alt="Profile image"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">{{getUser.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <h2>My own Trading Cards</h2>
    <p>OWN CARDS</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("My Profile");
  },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style>
</style>