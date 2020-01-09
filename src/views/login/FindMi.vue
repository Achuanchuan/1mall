<template>
  <div>
    <van-nav-bar @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" size="36px" />
    </van-nav-bar>
    <div class="login-dl">
      <h1>请输入账户名</h1>
      <h4>请输入您要找回密码的账户名</h4>
    </div>
    <div class="userName">
      <input type="text" v-model="name" placeholder="请输入手机号/邮箱/用户名" />
    </div>
    <p>国际手机号请按+6690053441的格式输入</p>
    <div class="login-yz">
      <van-button
        type="primary"
        :disabled="code"
        color="#04dae9"
        size="large"
      >下一步</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
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
.login-yz {
  margin: 10px 12px;
}
.van-button--large {
  border-radius: 5px;
}
.userName {
  border-bottom: 1px solid #ccc;
  margin: 30px 12px;
  height: 30px;
  line-height: 25px;
}
p {
  margin: 10px 12px;
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
  border: none;
  width: 100%;
}
</style>