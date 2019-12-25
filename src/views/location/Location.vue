<template>
  <div id="location">
    <nav-bar class="records-nav">
      <div class="left" slot="left">
        <van-icon name="arrow-left" />
      </div>
      <div slot="center">
        <van-search class="search" placeholder="搜城市/酒店/景点/美食" v-model="value" />
      </div>
      <div class="right" slot="right">
        <van-icon name="friends-o" />
      </div>
    </nav-bar>
    <div class="swiper">
      <swiper />
    </div>
    <recommend />
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./chirden/swiper/Swiper";
import Recommend from './chirden/recommend/Recommend';
export default {
  name: "Location",
  components: {
    NavBar,
    Swiper,
    Recommend
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style scoped>
.van-search{
  padding: 5px 0;
}
.swiper {
  margin: 10px 16px 0 16px;
}
.swiper .van-search {
  padding-top: 3px;
}
.right,
.left .van-icon {
  font-size: 30px;
  padding: 5px 0 0 0;
}
</style>