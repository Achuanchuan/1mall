<template >
  <div id="records">
    <nav-bar class="records-nav">
      <div class="record" slot="left">
        <p>全部订单</p>
      </div>
      <div slot="center">
        <div>我的订单</div>
      </div>
      <div slot="right">
        <p>实名同步</p>
      </div>
    </nav-bar>
    <journey />
    <want-to />
    <next-station />
    <div style="height:50px"></div>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Journey from './chirden/Journey'
import WantTo from './chirden/WantTo'
import NextStation from './chirden/NextStation'
export default {
  name: "Records",
  components: {
    NavBar,
    Journey,
    WantTo,
    NextStation
  }
};
</script>
<style scoped>
p {
  font-size: 12px;
}
</style>