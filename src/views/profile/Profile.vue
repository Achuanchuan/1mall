<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div class="right" slot="right">
        <van-icon name="setting-o" />
        <van-icon name="scan" />
        <van-icon name="more-o" />
      </div>
    </nav-bar>
    <enroll />
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Enroll from "./chirden/enroll/Enroll";
export default {
  name: "Profile",
  components: {
    NavBar,
    Enroll
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
.left,.right{
  width: 120px;
}
</style>