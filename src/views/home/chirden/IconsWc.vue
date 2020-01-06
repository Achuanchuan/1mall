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
          imgUrl: require("@assets/img/home/icon2/innBnb.png"),
          desc: "名宿客栈",
          link:''
        },
        {
          id: "02",
          imgUrl:require("@assets/img/home/icon2/bargainflight.png"),
          desc: "低价机票"
        },
        {
          id: "03",
          imgUrl:require("@assets/img/home/icon2/group.png"),
          desc: "特惠酒店"
        },
        {
          id: "04",
          imgUrl:require("@assets/img/home/icon2/haiwai.png"),
          desc: "海外酒店"
        },
        {
          id: "05",
          imgUrl:require("@assets/img/home/icon2/you.png"),
          desc: "一日游"
        },
        {
          id: "06",
          imgUrl:require("@assets/img/home/icon2/tuan.png"),
          desc: "旅游团购"
        },
        {
          id: "07",
          imgUrl:require("@assets/img/home/icon2/car.png"),
          desc: "专车自驾"
        },
        {
          id: "08",
          imgUrl: require("@assets/img/home/icon2/aroundtravel.png"),
          desc: "周边短途"
        },
        {
          id: "09",
          imgUrl: require("@assets/img/home/icon2/freeTravel.png"),
          desc: "自由行"
        },
        {
          id: "010",
          imgUrl: require("@assets/img/home/icon2/youlun.png"),
          desc: "游轮"
        }
      ]
    };
  }
};
</script>

<style scoped>
.van-grid-item {
  margin-top: -14px;
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