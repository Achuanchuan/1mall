<template>
  <div id="order">
    <div class="order-top">
      <p class="img">
        <img src="@assets/img/service/wudingdan.png" height="80px;" alt />
      </p>
      <p>您还没有订单~</p>
    </div>
    <div class="order-side">
      <div class="order-side-left">
        <img src="@assets/img/service/msnui-call.png" alt="">
      </div>
      <div class="order-side-center">
        <p class="order-side-center-p">{{h}}<p>
        <p class="order-side-center-pp">{{p}}</p>
      </div>
      <div class="order-side-right">
        <router-link to="/Profile"><van-icon name="arrow" color="rgb(184, 184, 184)" /></router-link>
        
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
      h:'在线客服',
      p:'智能专属客服，轻松解决订单问题'
    }
  },
};
</script>
<style scoped>
#order {
  margin-top: 30px;
}
.order-side {
  width: 85%;
  height: 50px;
  margin: 10px auto;
  border-radius: 25px;
  -webkit-box-shadow: 0 0 10px 2px #cccccc;
  box-shadow: 0 0 10px 2px #cccccc;
}
.order-side-left{
  float: left;
  width: 40px;
  height: 40px;
  background-color: #6be3f3;
  border-radius: 50%;
  margin: 5px;
}
.order-side-left img{
  width: 80%;
  height: 80%;
  margin: 3px;
}
.order-side-center{
  float: left;
}
.order-side-center-p{
  font-weight: bolder;
  font-size: 12px;
  color: #000;
  margin: 10px 0 5px 0;
}
.order-side-center-pp{
  font-size: 10px;
  color: rgb(184, 184, 184);
}
.order-side-right{
  float: right;
  margin: 17px;
}
.img {
  font-size: 48px;
}
.foot {
  height: 10px;
  background-color: #faf6f6;
  margin: 20px 0;
}
.order-top p {
  text-align: center;
  margin-top: 10px;
}
</style>