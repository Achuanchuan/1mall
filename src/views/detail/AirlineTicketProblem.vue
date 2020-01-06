<template>
  <div id="AirlineTicket">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <h3>ushfuiwheuihri</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "AirlineTicketProblem",
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>