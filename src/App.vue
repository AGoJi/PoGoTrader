<template>
  <div>
    <Header :title="title" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "{View title}"
    };
  }
};
</script>
<style scoped></style>
