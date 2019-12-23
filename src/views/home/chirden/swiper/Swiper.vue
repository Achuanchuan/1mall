<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
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
          imgUrl:
            "//imgs.qunarzz.com/vc/8d/63/a8/90bc4af557172cc68c6725ec36.jpg_92.jpg"
        },
        {
          id: "02",
          imgUrl:
            "//imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg"
        },
        {
          id: "03",
          imgUrl:
            "//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg"
        },
        {
          id: "04",
          imgUrl:
            "//imgs.qunarzz.com/vc/2c/1b/b2/edc5ed446de08e1285a957d3b5.jpg_92.jpg"
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