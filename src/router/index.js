import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AvailableTC from "../views/AvailableTC";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/AvailableTC",
    name: "availableTC",
    component: AvailableTC
  }
];

const router = new VueRouter({
  routes
});

export default router;
