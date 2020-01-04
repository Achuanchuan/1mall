<template>
  <div id="enroll">
    <div class="enroll-loging">
      <div class="enroll-loging-left">
        <img src="@assets/img/profile/enroll/touxiang.png" alt />
      </div>
      <div class="enroll-loging-center">
        <p class="dl">{{dl}}</p>
        <p class="text">{{text}}</p>
      </div>
      <div class="enroll-loging-right">
        <img src="@assets/img/profile/enroll/jinbi.png" alt="">
        <p>签到</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Enroll",
  data() {
    return {
      dl:'登录/注册',
      text:'登录享受更多优惠以及服务'
    }
  },
};
</script>
<style scoped>
.enroll-loging-left{
  margin: 12px;
  float: left;
}
.enroll-loging-center{
  float: left;
  margin-top: 20px;
}
.dl{
  font-weight: bolder;
  font-size: 18px;
  color: #000;
}
.text{
  font-size: 14px;
}
.enroll-loging-center p{
  margin: 5px 0;
}
.enroll-loging-right{
  float: right;
  width: 20%;
  height: 40px;
  background-color: #fbc106;
  border-radius: 25px;
  margin: 23px 12px 0 0;
}
.enroll-loging-right img{
  float: left;
  width: 40%;
  height: 70%;
  margin: 5px;
}
.enroll-loging-right p{
  float: right;
  font-size: 14px;
  margin:12px 5px 0 0;
  color: #ffffff;
}
</style>