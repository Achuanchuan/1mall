<template>
  <div id="my-order">
    <div class="order-bt">
      <h3>{{h}}</h3>
        <p>
          {{p}}
          <van-icon name="arrow" size="10" />
        </p>
    </div>
      <van-grid :gutter="10" :border="false">
        <van-grid-item v-for="item in order" :key="item.id">
          <img :src="item.img" alt />
          <p>{{item.text}}</p>
        </van-grid-item>
      </van-grid>
    </div>
</template>
<script>
export default {
  name: "MyOrder",
  data() {
    return {
      h: "我的订单",
      p: "查看全部订单",
      order: [
        {
          id: "01",
          img: require("@assets/img/profile/myorder/fukuan.png"),
          text: "待付款"
        },
        {
          id: "02",
          img: require("@assets/img/profile/myorder/chuhang.png"),
          text: "待出行"
        },
        {
          id: "03",
          img: require("@assets/img/profile/myorder/pen-square.png"),
          text: "待点评"
        },
        {
          id: "04",
          img: require("@assets/img/profile/myorder/tuikuan-.png"),
          text: "退款单"
        }
      ]
    };
  }
};
</script>
<style scoped>
#my-order {
  margin: 20px 12px;
  background-color: #ffffff;
  border-radius: 10px;
}
.van-grid{
  margin-top: 20px;
}
.order-bt{
  height: 25px;
  line-height: 25px;
}
.order-bt h3 {
  float: left;
  margin: 10px;
}
.order-bt p{
   float: right;
  font-size: 14px;
  color: #757575;
  margin: 10px;
}
.van-grid-item{
  background-color:transparent;
}
.van-grid-item__content p{
  margin-top: 5px;
  color: #000;
}
img{
  width: 70%;
  height: 65%;
}
</style>