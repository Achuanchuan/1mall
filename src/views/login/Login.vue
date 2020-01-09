<template>
  <div id="login">
    <van-nav-bar @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" size="36px" />
    </van-nav-bar>
    <div class="login-dl">
      <h1>登录/注册</h1>
      <h4>未注册手机号验证后即完成注册</h4>
    </div>
    <div class="login-phone">
      <span class="city">
        +86
        <van-icon name="arrow" size="18px" />
      </span>
      <span class="hr"></span>
      <input type="tel" name="tel" placeholder="请输入手机号" v-model="phone" class="tel" />
    </div>
    <div class="login-yz">
      <van-button type="primary" :disabled="logincode" color="#04dae9" size="large">获取验证码</van-button>
    </div>
    <div class="login-to">
      <router-link to="/loginpwd">账号密码登录</router-link>
    </div>
      <van-row type="flex" justify="center">
        <van-col v-for="item in Img" :key="item.id" span="12">
          <img :src="item.img" alt />
          <p>{{item.text}}</p>
        </van-col>
      </van-row>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      Img: [
        {
          id: "01",
          img: require("@assets/img/login/wx.jpg"),
          text: "微信"
        },
        {
          id: "02",
          img: require("@assets/img/login/zf.jpg"),
          text: "支付宝"
        }
      ]
    };
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    logincode() {
      //匹配是否为手机号
      return !/^1\d{10}$/.test(this.phone);
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
  // loginTime() {
  //   // 倒计时
  //   if (!this.timenum) {
  //     this.timenum = 30; // 初始值为30秒
  //     let clertime = setInterval(() => {
  //       // 计时器
  //       this.timenum--;
  //       if (this.timenum <= 0) {
  //         // 如果减到0则清除计时器
  //         clearInterval(clertime);
  //       }
  //     }, 1000);
  //     // ajax请求
  //   }
  // }
};
</script>
<style scoped>
.login-phone {
  margin: 20px 12px;
  height: 30px;
  line-height: 25px;
  border-bottom: #ccc 1px solid;
}
.login-phone .van-icon {
  top: 3px;
}
.tel {
  border: none;
}
.login-yz {
  margin: 10px 12px;
}
.van-button--large {
  border-radius: 5px;
}
.city {
  float: left;
}
.hr {
  display: block;
  margin: 0 5px 0 0;
  height: 30px;
  float: left;
  width: 1px;
  background-color: #cccccc;
}
.login-to{
height: 30px;
}
.login-to a {
  
  float: right;
  margin: 10px 12px;
  color: rgb(0, 200, 226);
}
.van-row{
  margin-top: 50%;
}
.van-col img{
border-radius: 5px;
margin: 0 33%;
}
.van-col p{
  text-align: center;
}
h1 {
  text-align: center;
  color: #000;
}
h4 {
  text-align: center;
  color: #ccc;
}
input {
  width: 84%;
}
</style>