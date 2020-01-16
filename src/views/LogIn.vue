<template>
  <v-container>
    <v-form v-on:submit.prevent>
      <v-container>
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password"></v-text-field>
        <v-layout row justify-center>
          <v-flex xs4>
            <v-btn color="red">Log In</v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="red" @click="logOut">Log Out</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row justify-center>
          <img
            @click="googleLogin"
            src="@/assets/googlelogin.png"
            alt="Google Login"
            v-if="!getUser"
            class="mt-4"
          />
        </v-layout>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import dataBase from "@/dataBase";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["setTitle", "setUser"]),
    googleLogin() {
      let that = this;
      const provider = new dataBase.auth.GoogleAuthProvider();
      dataBase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);

          //Google Acess Token

          //var token = result.credential.accessToken;

          //Signed-in user info
          var user = {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
            id: result.user.uid
          };
          console.log(user);
          that.auth = user;
          that.setUser(user);

          dataBase
            .database()
            .ref("users/" + result.user.uid)
            .set(user);

          // ...
        })
        .catch(function(error) {
          console.log(error);
          //Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          //The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
        });
    },
    logOut() {
      let that = this;
      dataBase
        .auth()
        .signOut()
        .then(function() {
          //Sign-out successful.
          that.auth = null;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  created() {
    this.setTitle("Log In");
    dataBase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.auth = {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          id: user.uid
        };
      } else {
        // No user is signed in.
        console.log("User not logged in!!!");
      }
    });
  }
};
</script>

<style scoped>
img {
  height: 40px;
}
</style>
