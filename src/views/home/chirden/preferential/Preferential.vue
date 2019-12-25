<template>
  <div class="preferential">
    <h3>
      <label>今日特惠</label>
      <a href="#">更多 ></a>
    </h3>
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item of iconList" :key="item.id">
        <a :href="item.link">
          <img :src="item.imgUrl" alt />
          <div class="pre">
            <p>{{item.desc}}</p>
            <div class="preferential-title">{{item.title}}</div>
            <span>{{item.price}}</span>
          </div>
        </a>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Preferential",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/preferential/pre1.jpg"),
          desc: "北京-巴厘岛 6天跟团游",
          title: "秒杀春节巴厘6天！ 网红秋千&鸟巢~ 蜜月湾（玻璃底船+海龟岛）金巴兰海滩",
          price: "￥2588起",
          link: ""
        },
        {
          id: "02",
          imgUrl: require("@assets/img/home/preferential/pre2.jpg"),
          desc: "北京-泰国 6天跟团游",
          title: "泰国曼谷芭提雅6~7天💎纯玩💎市中心5砖酒店💎网红夜市💎21航站楼",
          price: "￥2588起",
          link: ""
        },
        {
          id: "03",
          imgUrl: require("@assets/img/home/preferential/pre3.jpg"),
          desc: "北京-哈尔滨 6天跟团游",
          title: "纯玩雪乡长白山小包团！早定免费升级国五酒店丨双温泉+亚布力滑雪+五星炕标",
          price: "￥2588起",
          link: ""
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/preferential/pre4.jpg"),
          desc: "北京-海南 6天跟团游",
          title: "春节抢先GO，北京故宫、八达岭长城臻品4日丨赠升旗仪式+商务酒店丨24H接送",
          price: "￥2588起",
          link: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.preferential-title {
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
.preferential h3 {
  height: 25px;
  line-height: 25px;
  clear: both;
  margin: 5px 10px;
}
.preferential label {
  float: left;
}
.preferential a {
  float: right;
  font-size: 16px;
}
.pre p {
  margin: 5px 0 ;
  font-size: 16px;
}
.pre span {
  font-size: 20px;
  color: #f00;
}
</style>