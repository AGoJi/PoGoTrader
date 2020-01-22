<template>
  <div>
    <div v-if="this.getUser" class="chatBox ma-3">
      <div v-for="(v,k,i) in messages" :key="i+'msg'" class="msg">
        <p class="ma-3">
          <span>{{v.user.name}}</span>
          : {{v.msg}}
        </p>
      </div>
    </div>
    <v-container>
      <v-layout row justify-space-around>
        <v-flex xs6>
          <v-text-field v-model="message" label="Type..."></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn @click="sendMsg" color="red">Send</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
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

<style scoped>
.chatBox {
  width: 350px;
  height: 450px;
  overflow-y: auto;
  border: solid;
  border-color: grey;
  border-width: 1px;
  word-wrap: break-word;
}
</style>