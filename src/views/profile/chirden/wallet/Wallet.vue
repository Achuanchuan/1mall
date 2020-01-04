<template>
  <div id="wallet">
    <div class="wallet-bt">
      <h3>{{h}}</h3>
      <p>
        {{p}}
        <van-icon name="arrow" size="10" />
      </p>
    </div>
    <van-grid :gutter="5" :border="false">
      <van-grid-item v-for="item in order" :key="item.id">
        <img :src="item.img" alt />
        <p>{{item.text}}</p>
        <p class="title">{{item.title}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data() {
    return {
      h: "我的钱包",
      p: "余额，银行卡等",
      order: [
        {
          id: "01",
          img: require("@assets/img/profile/wallet/licai.png"),
          text: "理财",
          title: "稳赚收益"
        },
        {
          id: "02",
          img: require("@assets/img/profile/wallet/icon.png"),
          text: "拿去花",
          title: "先出行后付款"
        },
        {
          id: "03",
          img: require("@assets/img/profile/wallet/hua.png"),
          text: "借去花",
          title: "最高二十万"
        },
        {
          id: "04",
          img: require("@assets/img/profile/wallet/banqia.png"),
          text: "白金卡",
          title: "最高50万额度"
        }
      ]
    };
  }
};
</script>
<style scoped>
#wallet {
  margin: 20px 12px;
  background-color: #ffffff;
  border-radius: 10px;
}
.van-grid {
  margin-top: 20px;
}
.wallet-bt {
  height: 25px;
  line-height: 25px;
}
.wallet-bt h3 {
  float: left;
  margin: 10px;
}
.wallet-bt p {
  float: right;
  font-size: 14px;
  color: #757575;
  margin: 8px;
}
.title{
  font-size: 10px;
}
.van-grid-item {
  background-color: transparent;
}
.van-grid-item__content p {
  margin-top: 5px;
  color: #000;
}
img {
  width: 70%;
  height: 50%;
}
</style>