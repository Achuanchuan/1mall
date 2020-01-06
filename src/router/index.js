import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@views/home/Home");

const Location = () => import("@views/location/Location");

const Service = () => import("@views/service/Service");
const AirlineTicketProblem = () => import("@views/detail/AirlineTicketProblem");
const Records = () => import("@views/records/Records");

const Profile = () => import("@views/profile/Profile");

Vue.use(Router);

const routes = [
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
  },
  {
    path: "/detail/:id",
    component: AirlineTicketProblem
  }
];

export default new Router({
  routes,
  mode: "history"
});
