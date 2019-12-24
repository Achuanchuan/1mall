<template>
  <div id="maintabbar">
    <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="aim" to="/Interestingsea">趣浪</van-tabbar-item>
      <van-tabbar-item icon="records" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "MainTabBar",
  data() {
    return {
      active: 0,
      'safe-area-inset-bottom':true
    };
  }
};
</script>
<style scoped>
</style>