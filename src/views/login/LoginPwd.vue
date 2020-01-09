<template>
  <div id="login-pwd">
    <van-nav-bar @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" size="36px" />
    </van-nav-bar>
    <div class="login-dl">
      <h1>账号密码登录</h1>
      <h4>验证通过后即可完成登录</h4>
    </div>
    <div class="userName">
      <input type="text" v-model="name" placeholder="请输入手机号/邮箱/用户名" />
    </div>
    <div class="password">
      <input type="password" placeholder="请输入密码" />
    </div>
    <div class="login-yz">
      <van-button type="primary" :disabled="code" color="#04dae9" size="large" id="dl" to="/home">登录</van-button>
    </div>
    <div class="login-to">
      <router-link to="/findmi">忘记密码</router-link>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name:'',
      // code:true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    code() {
      //匹配手机号
      return !/^1\d{10}$/.test(this.name);
      //匹配邮箱
      return !/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.name);
    }
  }
};
</script>
<style scoped>
.userName,
.password {
  border-bottom: 1px solid #ccc;
  margin: 30px 12px;
  height: 30px;
  line-height: 25px;
}
.login-yz {
  margin: 10px 12px;
}
.van-button--large {
  border-radius: 5px;
}
.login-to a {
  float: right;
  margin: 10px 12px;
  color: rgb(0, 200, 226);
}
input {
  border: none;
  width: 100%;
}
h1 {
  text-align: center;
  color: #000;
}
h4 {
  text-align: center;
  color: #ccc;
}
</style>