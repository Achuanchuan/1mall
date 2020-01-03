import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@views/home/Home");
const Location = () => import("@views/location/Location");
const Service = () => import("@views/service/Service");
const Records = () => import("@views/records/Records");
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
      path: "/service",
      component: Service
    },
    {
      path: "/service/:id",
      component: Service
    },
    {
      path: "/records",
      component: Records
    },
    {
      path: "/location",
      component: Location
    },
    {
      path: "/profile",
      component: Profile
    }
  ],
  mode: "history"
});
