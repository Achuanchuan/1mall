<template>
  <div class="tickets">
    <h3>
      <label>当季景点门票</label>
      <a href>更多特惠门票 ></a>
    </h3>
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id">
        <a :href="item.link">
          <img :src="item.imgUrl" alt />
          <div class="day">
            <p>{{item.desc}}</p>
            <div class="tickets-title">{{item.title}}</div>
            <span>{{item.price}}</span>
          </div>
        </a>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Tickets",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/tickets/ticket1.jpg"),
          desc: "拙政园",
          title: "庭院错落，花木为胜，天下园林之典范",
          price: "￥45",
          link: ""
        },
        {
          id: "02",
          imgUrl: require("@assets/img/home/tickets/ticket2.jpg"),
          desc: "虎丘",
          title: "苏东坡说到苏州不游虎丘乃憾事也",
          price: "￥15",
          link: ""
        },
        {
          id: "03",
          imgUrl: require("@assets/img/home/tickets/ticket3.jpg"),
          desc: "周庄",
          title: "古香古色，品美食寻才子觅佳人",
          price: "￥88",
          link: ""
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/tickets/ticket4.jpg"),
          desc: "南京总统府",
          title: "了解中国近代史，切记勿忘国耻",
          price: "￥36",
          link: ""
        },
        {
          id: "05",
          imgUrl: require("@assets/img/home/tickets/ticket5.jpg"),
          desc: "常州中华恐龙园",
          title: "以恐龙为主题的综合性游乐园",
          price: "￥99",
          link: ""
        },
        {
          id: "06",
          imgUrl: require("@assets/img/home/tickets/ticket6.jpg"),
          desc: "灵山大佛",
          title: "观释迦牟尼佛青铜立像，赏佛教胜景",
          price: "￥175",
          link: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.tickets-title {
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0;
}
.van-grid-item {
  margin-top: -9px;
}
.van-grid-item img {
  width: 100%;
  border-radius: 5px;
}
.tickets h3 {
  height: 25px;
  line-height: 25px;
  clear: both;
  margin: 5px 10px;
}
.tickets label {
  float: left;
}
.tickets a {
  float: right;
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