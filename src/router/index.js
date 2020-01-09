import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@views/home/Home");

const Location = () => import("@views/location/Location");

const Service = () => import("@views/service/Service");
const AirlineTicketProblem = () => import("@views/detail/AirlineTicketProblem");
// const Login = () => import("@views/detail/Login");

const Records = () => import("@views/records/Records");

const Profile = () => import("@views/profile/Profile");
const Login = () => import("@views/login/Login");
const LoginPwd = () => import("@views/login/LoginPwd");
const FindMi = () => import("@views/login/FindMi");
// const Login = () => import("@views/profile/child/Login");

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
  //  我的页面
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:id",
    component: AirlineTicketProblem
  },
  {
    path: "/login",
    component: Login,
    children: []
  },
  {
    path: "/loginpwd",
    component: LoginPwd
  },
  {
    path: "/findmi",
    component: FindMi
  }
];

export default new Router({
  routes,
  mode: "history"
});
