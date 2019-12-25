<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="adress" slot="left">重庆<van-icon name="arrow-down" /></div>
      <div slot="center">
        <van-search class="search" placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div slot="right">
        <van-button class="btn-dl" type="primary" to="profile">登录</van-button>
      </div>
    </nav-bar>
    <swiper />
    <icons />
    <icons-wc />
    <preferential />
    <holiday />
    <tickets />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    </van-pull-refresh>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./chirden/swiper/Swiper";
import Icons from "./chirden/icons/Icons";
import IconsWc from "./chirden/icons/IconsWc";
import Preferential from "./chirden/preferential/Preferential";
import Holiday from "./chirden/holiday/Holiday";
import Tickets from "./chirden/tickets/Tickets";

// import Scroll from "@components/common/scroll/Scroll";
import { getHomeData } from "@network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Icons,
    IconsWc,
    Preferential,
    Holiday,
    Tickets
    // Scroll
  },
  data() {
    return {
      result: null,
      value: "",
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  created() {
    getHomeData().then(res => {
      this.result = res;
    });
  }
};
</script>
<style scoped>
.adress {
  color: #000;
}
.home-nav {
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