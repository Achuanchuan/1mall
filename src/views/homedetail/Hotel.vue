<template id="temp">
  <div class="hotel">
    <scroller height="100%" :on-refresh="refresh" :on-infinite="infinite" ref="scrollerBottom">
      <van-nav-bar title="酒店" left-text="返回" left-arrow @click-left="onClickLeft" />
      <main>
        <h3>
          <label>酒店排行榜</label>
          <a href="#">全部榜单 >></a>
        </h3>
        <van-grid :column-num="2" :border="false">
          <van-grid-item v-for="item of iconList" :key="item.id">
            <a :href="item.link">
              <img :src="item.imgUrl" alt />
              <div class="pre">
                <p>{{item.desc}}</p>
                <div class="hotel-title">{{item.title}}</div>
                <span>{{item.price}}</span>
              </div>
            </a>
          </van-grid-item>
        </van-grid>
      </main>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "Hotel",
  data() {
    return {
      noDate: false, //判断是否加载
      iconList: [
        {
          id: "01",
          imgUrl: require("@assets/img/home/preferential/pre1.jpg"),
          desc: "北京-巴厘岛 6天跟团游",
          title:
            "秒杀春节巴厘6天！ 网红秋千&鸟巢~ 蜜月湾（玻璃底船+海龟岛）金巴兰海滩",
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
          title:
            "纯玩雪乡长白山小包团！早定免费升级国五酒店丨双温泉+亚布力滑雪+五星炕标",
          price: "￥2588起",
          link: ""
        },
        {
          id: "04",
          imgUrl: require("@assets/img/home/preferential/pre4.jpg"),
          desc: "北京-海南 6天跟团游",
          title:
            "春节抢先GO，北京故宫、八达岭长城臻品4日丨赠升旗仪式+商务酒店丨24H接送",
          price: "￥2588起",
          link: ""
        },
        {
          id: "05",
          imgUrl: require("@assets/img/home/preferential/pre1.jpg"),
          desc: "北京-巴厘岛 6天跟团游",
          title:
            "秒杀春节巴厘6天！ 网红秋千&鸟巢~ 蜜月湾（玻璃底船+海龟岛）金巴兰海滩",
          price: "￥2588起",
          link: ""
        },
        {
          id: "06",
          imgUrl: require("@assets/img/home/preferential/pre2.jpg"),
          desc: "北京-泰国 6天跟团游",
          title: "泰国曼谷芭提雅6~7天💎纯玩💎市中心5砖酒店💎网红夜市💎21航站楼",
          price: "￥2588起",
          link: ""
        },
        {
          id: "07",
          imgUrl: require("@assets/img/home/preferential/pre3.jpg"),
          desc: "北京-哈尔滨 6天跟团游",
          title:
            "纯玩雪乡长白山小包团！早定免费升级国五酒店丨双温泉+亚布力滑雪+五星炕标",
          price: "￥2588起",
          link: ""
        },
        {
          id: "08",
          imgUrl: require("@assets/img/home/preferential/pre4.jpg"),
          desc: "北京-海南 6天跟团游",
          title:
            "春节抢先GO，北京故宫、八达岭长城臻品4日丨赠升旗仪式+商务酒店丨24H接送",
          price: "￥2588起",
          link: ""
        },
        {
          id: "09",
          imgUrl: require("@assets/img/home/preferential/pre1.jpg"),
          desc: "北京-巴厘岛 6天跟团游",
          title:
            "秒杀春节巴厘6天！ 网红秋千&鸟巢~ 蜜月湾（玻璃底船+海龟岛）金巴兰海滩",
          price: "￥2588起",
          link: ""
        },
        {
          id: "010",
          imgUrl: require("@assets/img/home/preferential/pre2.jpg"),
          desc: "北京-泰国 6天跟团游",
          title: "泰国曼谷芭提雅6~7天💎纯玩💎市中心5砖酒店💎网红夜市💎21航站楼",
          price: "￥2588起",
          link: ""
        },
        {
          id: "011",
          imgUrl: require("@assets/img/home/preferential/pre3.jpg"),
          desc: "北京-哈尔滨 6天跟团游",
          title:
            "纯玩雪乡长白山小包团！早定免费升级国五酒店丨双温泉+亚布力滑雪+五星炕标",
          price: "￥2588起",
          link: ""
        },
        {
          id: "012",
          imgUrl: require("@assets/img/home/preferential/pre4.jpg"),
          desc: "北京-海南 6天跟团游",
          title:
            "春节抢先GO，北京故宫、八达岭长城臻品4日丨赠升旗仪式+商务酒店丨24H接送",
          price: "￥2588起",
          link: ""
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    refresh() {
      // let _this = this;
      // _this.data.pageIndex = 1; //重置页数刷新每次页数都是第一页
      // _this.noDate = false; //重置数据判断
      // _this.qryNoticeList();
      console.log("refresh");
    },
    infinite(done) {
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2);
        });
        return;
      }
      let self = this; //this指向问题
      let start = this.moveList.length;

      setTimeout(() => {
        for (let i = start + 1; i < start + 10; i++) {
          self.moveList.push(i);
        }
        if (start > 30) {
          self.noData = "没有更多数据";
        }
        self.$refs.myscroller.resize();
        done();
      }, 1500);
    }
  }
};
</script>

<style scoped>
.hotel {
  position: absolute;
  width: 100%;
  height: 100%; /* 有header的时候可能会出现滚动条，所以最好高度是除去header的高度 */
  /* top: 40px; 一般页面有header的时候需要留出header的高度 */
  /* bottom: 20px; */
}
main {
  height: 100%;
}
.hotel-title {
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
.hotel h3 {
  height: 25px;
  line-height: 25px;
  clear: both;
  margin: 5px 10px;
}
.hotel label {
  float: left;
}
.hotel a {
  float: right;
  font-size: 16px;
}
.pre p {
  margin: 5px 0;
  font-size: 16px;
}
.pre span {
  font-size: 20px;
  color: #f00;
}
</style>