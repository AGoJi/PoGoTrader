<template>
  <v-form v-on:submit.prevent>
    <v-container>
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn color="red">Log In</v-btn>
      <v-btn color="red" @click="logOut">Log Out</v-btn>
      <img
        @click="googleLogin"
        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-button-png-1.png"
        alt="Google Login"
        v-if="!auth"
      />
      <div v-if="auth">
        <!--Profile-->
        <p>PERFIL</p>
        <h3>{{auth.name}}</h3>
        <img :src="auth.avatar" alt="Profile image" />
        <!--Chat-->
        <div>
          <p>CHAT</p>
          <input type="text" v-model="message" />
          <button @click="sendMsg">Send</button>
          <div v-for="(v,k,i) in messages" :key="i+'msg'" class="msg">
            <p>
              <span>{{v.user.name}}</span>
              : {{v.msg}}
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import dataBase from "@/dataBase";
import { mapMutations } from "vuex";
export default {
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: "",
      auth: null,
      message: "",
      messages: []
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
    },
    sendMsg() {
      dataBase
        .database()
        .ref()
        .child("posts")
        .push({ user: this.auth, msg: this.message });
      this.message = "";
    },
    getPosts() {
      let that = this;
      dataBase
        .database()
        .ref("posts/")
        .on("value", snapshot => {
          console.log(snapshot.val());

          that.messages = snapshot.val();
        });
    }
  },
  created() {
    this.setTitle("Log In");
    this.getPosts();
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
  height: 100px;
}
</style>
