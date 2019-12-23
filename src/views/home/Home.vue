<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物商城</div>
    </nav-bar>
    <swiper></swiper>
  </div>
</template>
<script>
import { getHomeData } from "@network/home";
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "@components/common/swiper/Swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
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