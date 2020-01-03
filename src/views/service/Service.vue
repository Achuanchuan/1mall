<template>
  <div>
    <nav-bar class="service-nav">
      <div class="left" slot="left"></div>
      <div slot="center">
        <h3>客服</h3>
      </div>
      <div class="right" slot="right">
        <van-icon name="phone" size="24px" color="#fff" />
      </div>
    </nav-bar>
    <order />
    <problem />
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Problem from "./chirden/problem/Problem";
import Order from "./chirden/order/Order";
export default {
  name: "Service",
  components: {
    NavBar,
    Problem,
    Order
  }
};
</script>
<style scoped>
.service-nav,
.left,
.right {
  background-color: aqua;
}
.van-icon {
  margin-top: 8px;
}
h3 {
  color: #fff;
}
</style>