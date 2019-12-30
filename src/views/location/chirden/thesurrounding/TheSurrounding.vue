<template>
  <div>
    <h3>{{zb}}</h3>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <van-row type="flex" justify="center">
          <van-col class="left" span="11">
            <img src="@assets/img/location/weekend/weekend1.jpg" alt />
          </van-col>
          <van-col class="right" span="11">
            <img src="@assets/img/location/weekend/weekend2.jpg" alt />
          </van-col>
        </van-row>
      </swiper-slide>
      <swiper-slide>
        <van-row type="flex" justify="center">
          <van-col class="left" span="11">
            <img src="@assets/img/location/weekend/weekend1.jpg" alt />
          </van-col>
          <van-col class="right" span="11">
            <img src="@assets/img/location/weekend/weekend2.jpg" alt />
          </van-col>
        </van-row>
      </swiper-slide>
      <swiper-slide>
        <van-row type="flex" justify="center">
          <van-col class="left" span="11">
            <img src="@assets/img/location/weekend/weekend1.jpg" alt />
          </van-col>
          <van-col class="right" span="11">
            <img src="@assets/img/location/weekend/weekend2.jpg" alt />
          </van-col>
        </van-row>
      </swiper-slide>
      <swiper-slide>
        <van-row type="flex" justify="center">
          <van-col class="left" span="11">
            <img src="@assets/img/location/weekend/weekend1.jpg" alt />
          </van-col>
          <van-col class="right" span="11">
            <img src="@assets/img/location/weekend/weekend2.jpg" alt />
          </van-col>
        </van-row>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "TheSurrounding",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      zb: "周边好去处",
      swiperOption: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style scoped>
h3 {
  font-weight: bolder;
  padding: 10px 12px;
}
img {
  width: 100%;
  border-radius: 10px;
}
.left,
.right {
  margin: 4px;
}
</style>