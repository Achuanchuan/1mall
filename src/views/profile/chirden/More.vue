<template>
  <div id="more">
     <van-grid :gutter="5" :border="false">
      <van-grid-item v-for="item in order" :key="item.id">
        <img :src="item.img" alt />
        <p>{{item.text}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name:'More',
  data() {
    return {
      order: [
        {
          id: "01",
          img: require("@assets/img/profile/more/fapiao.png"),
          text: "我的发票",
        },
        {
          id: "02",
          img: require("@assets/img/profile/more/dianping.png"),
          text: "我的点评",
        },
        {
          id: "03",
          img: require("@assets/img/profile/more/huiyuan.png"),
          text: "会员中心",
        },
        {
          id: "04",
          img: require("@assets/img/profile/more/shangcheng.png"),
          text: "Q糖商城",
        },
        {
          id: "05",
          img: require("@assets/img/profile/more/xuesheng-copy.png"),
          text: "学生专区",
        },
        {
          id: "06",
          img: require("@assets/img/profile/more/xinyong.png"),
          text: "信用生活"
        },
        {
          id: "07",
          img: require("@assets/img/profile/more/fukuanma.png"),
          text: "付款码"
        },
        {
          id: "08",
          img: require("@assets/img/profile/more/location.png"),
          text: "我的旅程",
        },
        {
          id: "09",
          img: require("@assets/img/profile/more/xiangji.png"),
          text: "我的作品"
        },
        {
          id: "10",
          img: require("@assets/img/profile/more/yaoqingyouli.png"),
          text: "推荐有礼",
        },
        {
          id: "11",
          img: require("@assets/img/profile/more/youwenbida.png"),
          text: "有问必答"
        },
        {
          id: "12",
          img: require("@assets/img/profile/more/wode.png"),
          text: "我的游记",
        },
        {
          id: "13",
          img: require("@assets/img/profile/more/yewutiaoyanbaogaojitai.png"),
          text: "用户调研",
        },
        {
          id: "14",
          img: require("@assets/img/profile/more/tucao.png"),
          text: "我要吐槽"
        },
      ]
    }
  },
}
</script>
<style scoped>
#more{
  background-color: #fff;
  margin: 20px 12px;
  border-radius: 10px;
}
img{
  width: 70%;
  height: 70%;
}
p{
  margin-top: 5px;
}
</style>