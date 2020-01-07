<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="item of swiperList" :key="item.id">
        <a href="#">
          <img class="swiper-img" :src="item.imgUrl" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  data() {
    return {
      swiperList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/swiper/banner1.jpg")
        },
        {
          id: "02",
          imgUrl: require("@assets/img/home/swiper/banner2.jpg")
        },
        {
          id: "03",
          imgUrl: require("@assets/img/home/swiper/banner3.jpg")
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/swiper/banner4.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.swiper-img {
  width: 100%;
}
</style>