<template>
  <div id="want-to">
    <div class="want-bt">
      <span></span>
      <h2>{{h}}</h2>
    </div>
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item in Want" :key="item.id">
        <div class="station">
          <img :src="item.img" alt />
          <P class="want-city">{{item.city}}</P>
          <P class="want-title">{{item.title}}</P>
          <P class="want-text">{{item.text}}</P>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "WantTo",
  data() {
    return {
      h: "下一站去哪儿",
      Want: [
        {
          id: "01",
          img: require("@assets/img/record/station/1.jpg"),
          city: "火车票",
          title: "重庆—广元",
          text: "出行无忧"
        },
        {
          id: "02",
          img: require("@assets/img/record/station/2.jpg"),
          city: "机票",
          title: "重庆—广元",
          text: "特价机票可抢"
        },
        {
          id: "03",
          img: require("@assets/img/record/station/3.jpg"),
          city: "度假",
          title: "广元怎么玩",
          text: "省时省心花钱少"
        },{
          id: "04",
          img: require("@assets/img/record/station/4.jpg"),
          city: "机票",
          title: "广元住哪最方便",
          text: "价低质高选到赚到"
        }
      ]
    };
  }
};
</script>
<style scoped>
.want-bt {
  height: 25px;
  line-height: 25px;
  margin-top: 20px;
}
.want-bt h2 {
  float: left;
  color: #000;
  font-weight: bolder;
  margin: 10px;
}
.want-bt p {
  float: right;
  font-size: 14px;
  font-weight: bold;
  color: #757575;
  margin: 10px;
}
.van-icon {
  position: relative;
  top: 4px;
}
.van-grid {
  margin-top: 21px;
}
.want-city {
  color: #d8b270;
}
.want-title{
  color: #000;
  font-weight: bolder;
  font-size: 18px;
}
.want-text{
  color: rgb(151, 151, 151)
}
.station{
  border: 1px solid #ececec;
  border-radius: 5px;
}
span {
  float: left;
  display: block;
  width: 10px;
  height: 45px;
  background-color: #00cae2;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
img {
  width: 100%;
  border-top-left-radius:5px; 
  border-top-right-radius:5px;
}
p{
  margin: 5px 10px;
}
</style>