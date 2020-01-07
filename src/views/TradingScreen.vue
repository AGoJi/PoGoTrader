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
export default {
  components: {
    Back
  }
};
</script>

<style>
</style>