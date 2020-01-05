<template>
  <div id="journey">
    <div class="note" :style="note">
      <p class="bt-1">{{p}}</p>
      <p class="bt-2">{{pp}}</p>
      <p class="bt-3">
        <van-icon name="plus" size="20px" />
        {{ppp}}
      </p>
      <p class="bt-4">
        {{pppp}}
        <van-icon name="arrow" size="20px"/>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Journey",
  data() {
    return {
      p: "快速规划行程 出行更放心",
      pp: "未决定出行日期，可先加入“我想去”哦",
      ppp: "添加行程",
      pppp: "查看历史行程",
      note: {
        backgroundImage: "url(" + require("@assets/img/record/bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover'
      }
    };
  }
};
</script>
<style scoped>
.note {
  height: 265px;
}
.bt-1 {
  margin: 20px 0 10px 0;
  color: #000;
  font-size: 24px;
  font-weight: bolder;
}
.bt-2 {
  margin: 20px 0;
  color: #9e9e9e;
  font-weight: bold;
}
.bt-3 {
  display: block;
  margin: 10px auto;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 25px;
  background-color: #0ac8e0;
  color: #ffffff;
  font-weight: bold;
}
.van-icon {
  position: relative;
  top: 4px;
}
.bt-4 {
  margin: 20px 0;
  color: #0ac8e0;
  font-size: 18px;
  font-weight: bolder;
}
p {
  text-align: center;
}
</style>