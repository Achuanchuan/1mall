<template>
  <div id="AirlineTicket">
    <van-nav-bar
      title="机票"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h3>ushfuiwheuihri</h3>
    
  </div>
</template>
<script>
export default {
  name: "AirlineTicketProblem",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>