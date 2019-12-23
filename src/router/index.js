import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AvailableTC from "../views/AvailableTC";
import ChatRooms from "../views/ChatRooms";
import TCdetail from "../views/TCdetail";
import TradingScreen from "../views/TradingScreen";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/availabletc",
    name: "availabletc",
    component: AvailableTC
  },
  {
    path: "/chatrooms",
    name: "chatrooms",
    component: ChatRooms
  },
  {
    path: "/tcdetail",
    name: "tcdetail",
    component: TCdetail
  },
  {
    path: "/tradingscreen",
    name: "tradingscreen",
    component: TradingScreen
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
