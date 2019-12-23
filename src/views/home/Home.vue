<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物商城</div>
    </nav-bar>
    <swiper></swiper>
    <icons></icons>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./chirden/swiper/Swiper";
import Icons from "./chirden/icons/Icons";

import { getHomeData } from "@network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Icons
  },
  data() {
    return {
      result: null
    };
  },
  created() {
    getHomeData().then(res => {
      this.result = res;
    });
  }
};
</script>
<style scoped>
.home-nav {
  background-color: bisque;
  color: #fff;
}
</style>