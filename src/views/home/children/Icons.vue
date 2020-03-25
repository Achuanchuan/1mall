<template>
  <div class="icons">
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id" :to="item.link">
        <img :src="item.imgUrl" alt />
        <p class="icons-p">{{item.desc}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "Icons",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/icon1/hotel.png"),
          desc: "酒店",
          link: "/homedetail/Hotel"
        },
        {
          id: "02",
          imgUrl: require("@assets/img/home/icon1/flight.png"),
          desc: "机票"
        },
        {
          id: "03",
          imgUrl: require("@assets/img/home/icon1/package.png"),
          desc: "度假"
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/icon1/train.png"),
          desc: "火车票"
        },
        {
          id: "05",
          imgUrl: require("@assets/img/home/icon1/piao.png"),
          desc: "门票"
        }
      ]
    };
  }
};
</script>
<style scoped>
.van-grid-item img {
  width: 100%;
}
.icons-p {
  margin-top: 5px;
}
</style>