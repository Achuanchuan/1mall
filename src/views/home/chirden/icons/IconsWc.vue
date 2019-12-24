<template>
  <div>
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id" :to="item.link">
        <img :src="item.imgUrl" alt />
        <p>{{item.desc}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "IconsWc",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/innBnb.png",
          desc: "名宿客栈",
          link:''
        },
        {
          id: "02",
          imgUrl:
            "//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
          desc: "低价机票"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/group.png",
          desc: "特惠酒店"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/haiwai.png",
          desc: "海外酒店"
        },
        {
          id: "05",
          imgUrl: "//picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png",
          desc: "一日游"
        },
        {
          id: "06",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/tuan.png",
          desc: "旅游团购"
        },
        {
          id: "07",
          imgUrl:
            "//s.qunarzz.com/homenode/images/touchheader/car.png",
          desc: "专车自驾"
        },
        {
          id: "08",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png",
          desc: "周边短途"
        },
        {
          id: "09",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/freeTravel.png",
          desc: "自由行"
        },
        {
          id: "010",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/youlun.png",
          desc: "游轮"
        }
      ]
    };
  }
};
</script>

<style scoped>
.van-grid-item {
  /* padding-top: 5px; */
  margin-top: -15px;
}
.icons-wc {
  background-color: aqua;
  height: 5px;
  margin-top: 10px;
}
.van-grid-item__content--center img {
  width: 100%;
}
.van-grid-item__content--center p {
  font-size: 14px;
}
</style>