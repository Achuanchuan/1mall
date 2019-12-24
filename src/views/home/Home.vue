<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="adress" slot="left">重庆+</div>
      <div slot="center">
        <van-search class="search" placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div slot="right">
        <van-button class="btn-dl" type="primary" to="profile">登录</van-button>
      </div>
    </nav-bar>
    <swiper></swiper>
    <icons></icons>
    <icons-wc></icons-wc>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./chirden/swiper/Swiper";
import Icons from "./chirden/icons/Icons";
import IconsWc from "./chirden/icons/IconsWc";

import { getHomeData } from "@network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Icons,
    IconsWc
  },
  data() {
    return {
      result: null,
      value: ""
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
.adress{
  color: #000;
}
.home-nav {
  background-color: bisque;
  color: #fff;
}
.search {
  margin-top: -7px;
}
.van-search__content {
  border-radius: 5px;
}
.van-button--primary {
  border-radius: 10px;
  height: 32px;
  width: 50px;
  background-color: #ccc;
  border: 1px solid #ccc;
}
.van-button--normal {
  line-height: 32px;
}
.van-button--normal {
  padding: 0 5px;
}
</style>