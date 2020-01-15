<template>
  <div>
    <h2>General</h2>
    <div v-if="this.getUser">
      <input type="text" v-model="message" />
      <button @click="sendMsg">Send</button>
      <div v-for="(v,k,i) in messages" :key="i+'msg'" class="msg">
        <p>
          <span>{{v.user.name}}</span>
          : {{v.msg}}
        </p>
      </div>
    </div>
    <!--<h3>My Chat Rooms</h3>-->
  </div>
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