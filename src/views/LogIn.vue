<template>
  <v-form>
    <v-container>
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn color="red">Log In</v-btn>
      <v-btn color="red">Sign Out</v-btn>
      <p>Authenticate with Google</p>
    </v-container>
  </v-form>
</template>

<script>
import dataBase from "@/dataBase";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    googleLogin() {
      //let that = this;
      const provider = new dataBase.auth.GoogleAuthProvider();
      dataBase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);

          //Google Acess Token

          //var token = result.credential.accessToken;

          //Signed-in user info
        });
    }
  }
};
</script>

<style></style>
