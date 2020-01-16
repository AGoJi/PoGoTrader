<template>
  <div>
    <h2>General</h2>
    <div v-if="this.getUser">
      <div v-for="(v,k,i) in messages" :key="i+'msg'" class="msg">
        <p>
          <span>{{v.user.name}}</span>
          : {{v.msg}}
        </p>
      </div>
      <input type="text" v-model="message" />
      <button @click="sendMsg">Send</button>
    </div>
  </div>

  <!--<v-container ma-5>
    <v-layout row justify-center>
      <v-flex xs6>
        <v-text-field v-model="message" label="Type..."></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn @click="sendMsg" color="red">Send</v-btn>
      </v-flex>
    </v-layout>
  </v-container>-->
</template>

<script>
import dataBase from "@/dataBase";
import { mapMutations, mapGetters } from "vuex";
export default {
  props: {
    msg: String
  },
  data() {
    return {
      message: "",
      messages: []
    };
  },
  methods: {
    ...mapMutations(["setTitle"]),
    sendMsg() {
      dataBase
        .database()
        .ref()
        .child("posts")
        .push({ user: this.getUser, msg: this.message });
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
    this.setTitle("Chats");
    this.getPosts();
  },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style>
</style>