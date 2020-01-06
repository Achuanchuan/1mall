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
        <img src="@assets/img/profile/enroll/jinbi.png" alt />
        <p>签到</p>
      </div>
    </div>
    <van-row type="flex" justify="center">
      <van-col span="6" v-for="item in enroll" :key="item.id">
        <p>{{item.count}}</p>
        <p>{{item.text}}</p>
      </van-col>
      <van-col class="next" span="6">
        <p>
          <img src="@assets/img/profile/enroll/credentials.png" alt />
        </p>
        <p>常用信息</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "Enroll",
  data() {
    return {
      dl: "登录/注册",
      text: "登录享受更多优惠以及服务",
      enroll: [
        {
          id: "01",
          count: "0",
          text: "代金券"
        },
        {
          id: "02",
          count: "0",
          text: "收藏"
        },
        {
          id: "03",
          count: "0",
          text: "足迹"
        }
      ]
    };
  }
};
</script>
<style scoped>
.enroll-loging {
  height: 100px;
}
.enroll-loging-left {
  margin: 12px;
  float: left;
}
.enroll-loging-center {
  float: left;
  margin-top: 20px;
}
.dl {
  font-weight: bolder;
  font-size: 18px;
  color: #000;
}
.text {
  font-size: 14px;
}
.enroll-loging-center p {
  margin: 5px 0;
}
.enroll-loging-right {
  float: right;
  width: 20%;
  height: 40px;
  background-color: #fbc106;
  border-radius: 25px;
  margin: 23px 12px 0 0;
}
.enroll-loging-right img {
  float: left;
  width: 40%;
  height: 70%;
  margin: 5px;
}
.enroll-loging-right p {
  float: right;
  font-size: 14px;
  margin: 12px 5px 0 0;
  color: #ffffff;
}
.van-col {
  border-right: rgb(224, 224, 224) 1px solid;
}
.next {
  border: none;
}
.next p {
  margin-top: -10px;
}
.van-col p {
  text-align: center;
  margin-top: 5px;
}
</style>