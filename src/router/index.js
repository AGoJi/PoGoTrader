import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AvailableTC from "../views/AvailableTC";
import ChatRooms from "../views/ChatRooms";
import TCdetail from "../views/TCdetail";
import TradingScreen from "../views/TradingScreen";
import SignUp from "../views/SignUp";
import LogIn from "../views/LogIn";
import MyProfile from "../views/MyProfile";

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
    path: "/tcdetail/:id",
    name: "tcdetail",
    props: true,
    component: TCdetail
  },
  {
    path: "/tradingscreen",
    name: "tradingscreen",
    component: TradingScreen
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/login",
    name: "login",
    component: LogIn
  },
  {
    path: "/myprofile",
    name: "myprofile",
    component: MyProfile
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
