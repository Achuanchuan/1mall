import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@views/home/Home");
const InterestingSea = () => import("@views/Interestingsea/InterestingSea");
const Order = () => import("@views/order/Order");
const Profile = () => import("@views/profile/Profile");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/Interestingsea",
      component: InterestingSea
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/profile",
      component: Profile
    }
  ],
  mode: "history"
});
