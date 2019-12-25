<template>
  <div id="records">
    <nav-bar class="records-nav">
      <div class="adress" slot="left">全部订单</div>
      <div slot="center">
        <div>我的订单</div>
      </div>
      <div slot="right">
        
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
export default {
  name: "Records",
  components: {
    NavBar
  }
};
</script>
<style scoped>
</style>