<template>
  <div class="icons">
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p>{{item.desc}}</p>
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
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
        },
        {
          id: "02",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票"
        },
        {
          id: "05",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
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
</style>