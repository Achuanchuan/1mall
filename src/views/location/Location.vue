<template>
  <div id="location">
    <scroller height="100%" :on-refresh="refresh" :on-infinite="infinite" ref="scrollerBottom">
      <main>
        <nav-bar class="records-nav">
          <div class="left" slot="left">
            <van-icon name="arrow-left" />
          </div>
          <div slot="center">
            <van-search class="search" placeholder="搜城市/酒店/景点/美食" v-model="value" />
          </div>
          <div class="right" slot="right">
            <van-icon name="friends-o" />
          </div>
        </nav-bar>
        <div class="swiper">
          <swiper />
        </div>
        <recommend />
        <topic />
        <the-surrounding />
        <travel />
      </main>
    </scroller>
    <div style="height:200px"></div>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./children/Swiper";
import Recommend from "./children/Recommend";
import Topic from "./children/Topic";
import TheSurrounding from "./children/TheSurrounding";
import Travel from "./children/Travel";
export default {
  name: "Location",
  components: {
    NavBar,
    Swiper,
    Topic,
    Recommend,
    TheSurrounding,
    Travel
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
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
.van-search {
  padding: 5px 0;
}
.swiper {
  margin: 10px 16px 0 16px;
}
.swiper .van-search {
  padding-top: 3px;
}
.right,
.left .van-icon {
  font-size: 30px;
  padding: 5px 0 0 0;
}
</style>