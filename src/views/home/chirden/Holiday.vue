<template>
  <div class="holiday">
    <h3>
      <label>当季热门度假</label>
    </h3>
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id">
        <a :href="item.link">
          <img :src="item.imgUrl" alt />
          <div class="day">
            <p>{{item.desc}}</p>
            <span>{{item.price}}</span>
          </div>
        </a>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Holiday",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/holiday/day1.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "02",
          imgUrl: require("@assets/img/home/holiday/day2.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "03",
          imgUrl: require("@assets/img/home/holiday/day3.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/holiday/day4.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "05",
          imgUrl: require("@assets/img/home/holiday/day5.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "06",
          imgUrl: require("@assets/img/home/holiday/day6.jpg"),
          desc: "含往返飞机票",
          price: "￥2588",
          link: ""
        },
        {
          id: "07",
          imgUrl: require("@assets/img/home/holiday/day7.jpg"),
          desc: "含往返飞机票",
          price: "￥2588"
        },
        {
          id: "08",
          imgUrl: require("@assets/img/home/holiday/day8.jpg"),
          desc: "含往返飞机票",
          price: "￥2588"
        }
      ]
    };
  }
};
</script>

<style scoped>
.van-grid-item {
  margin-top: -9px;
}
.van-grid-item img {
  width: 100%;
  border-radius: 5px;
}
.holiday h3 {
  height: 25px;
  line-height: 25px;
  clear: both;
  margin: 5px 10px;
}
.holiday label {
  float: left;
}
.day p {
  margin: 5px 0 5px 0;
  font-size: 16px;
}
.day span {
  font-size: 20px;
  color: #f00;
}
</style>