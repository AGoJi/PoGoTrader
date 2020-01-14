<template>
  <div>
    <Back />
    <p>User</p>
    <div>
      <p>Chat text</p>
    </div>
    <input type="text" placeholder="Type..." />
    <button>Send</button>
  </div>
</template>

<script>
import Back from "../components/Back";
import { mapMutations } from "vuex";
export default {
  components: {
    Back
  },
  methods: {
    ...mapMutations(["setTitle"])
  },
  created() {
    this.setTitle("Trading Chat");
  }
};
</script>

<style>
</style>