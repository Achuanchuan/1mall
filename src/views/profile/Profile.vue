<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div class="right" slot="right">
        <van-icon name="setting-o" />
        <van-icon name="scan" />
        <van-icon name="more-o" dot />
      </div>
    </nav-bar>
    <enroll />
    <my-order />
    <wallet />
    <more />
    <div style="height:50px"></div>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Enroll from "./children/Enroll";
import MyOrder from "./children/MyOrder";
import Wallet from "./children/Wallet";
import More from "./children/More";
export default {
  name: "Profile",
  components: {
    NavBar,
    Enroll,
    MyOrder,
    Wallet,
    More
  }
};
</script>
<style scoped>
#profile {
  background: #e9e9e9;
}
.van-icon {
  margin: 10px;
}
.left,
.right {
  width: 120px;
}
</style>