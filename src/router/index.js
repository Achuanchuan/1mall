import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@views/home/Home");
const Hotel = () => import("@views/homedetail/Hotel");

const Location = () => import("@views/location/Location");

const Service = () => import("@views/service/Service");
const AirlineTicketProblem = () => import("@views/detail/AirlineTicketProblem");


const Records = () => import("@views/records/Records");

const Profile = () => import("@views/profile/Profile");
const Login = () => import("@views/login/Login");
const LoginPwd = () => import("@views/login/LoginPwd");
const FindMi = () => import("@views/login/FindMi");

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      navShow: true
    }
  },
  {
    path: "/service",
    component: Service,
    meta: {
      navShow: true
    }
  },
  {
    path: "/records",
    component: Records,
    meta: {
      navShow: true
    }
  },
  {
    path: "/location",
    component: Location,
    meta: {
      navShow: true
    }
  },
  //  我的页面
  {
    path: "/profile",
    component: Profile,
    meta: {
      navShow: true
    }
  },
  {
    path: "/detail/:id",
    component: AirlineTicketProblem,
    meta: {
      navShow: false
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      navShow: false
    }
  },
  {
    path: "/loginpwd",
    component: LoginPwd,
    meta: {
      navShow: false
    }
  },
  {
    path: "/findmi",
    component: FindMi,
    meta: {
      navShow: false
    }
  },
  {
    path: "/homedetail/:id",
    component: Hotel,
    meta: {
      navShow: false
    }
  }
];

export default new Router({
  routes,
  mode: "history"
});
