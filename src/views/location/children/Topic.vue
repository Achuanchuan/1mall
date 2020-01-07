<template>
  <div>
    <h3 class="topic-h3">{{bt}}</h3>
    <van-row class="topic" type="flex" justify="center">
      <van-col class="left" span="14">
        <a href>
          <img src="@assets/img/location/recommends/tui1.jpg" alt />
          <h4>{{left}}</h4>
        </a>
      </van-col>
      <van-col class="right" span="8">
        <div class="right-top">
          <a href>
            <img src="@assets/img/location/recommends/topic1.jpg" alt />
            <h4>{{right1}}</h4>
          </a>
        </div>
        <div class="right-down">
          <a href>
            <img src="@assets/img/location/recommends/topic2.jpg" alt />
            <h4>{{right2}}</h4>
          </a>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "Topic",
  data() {
    return {
      bt: "话题",
      left: "#当季最热#",
      right1: "#人间仙境#",
      right2: "#自驾游#"
    };
  }
};
</script>
<style scoped>
.topic-h3 {
  font-weight: bolder;
  padding: 10px 12px;
}
.left,
.right {
  margin: 3px;
}
.left {
  position: relative;
}
.left h4 {
  position: absolute;
  top: 45%;
  left: 38%;
  color: #fff
}
.right-top,
.right-down {
  position: relative;
}
.right-top h4 {
  position: absolute;
  top: 45%;
  left: 25%;
}
.right-down h4 {
  position: absolute;
  top: 40%;
  left: 30%;
}
.left,
.right h4 {
  color: #fff;
}

.left img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.right-top img {
  border-top-right-radius: 10px;
}
.right-down img {
  border-bottom-right-radius: 10px;
}
img {
  width: 100%;
}
</style>