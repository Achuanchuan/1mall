<template>
  <div id="home" class="home">
    <scroller height="100%" :on-refresh="refresh" :on-infinite="infinite" ref="scrollerBottom">
      <main>
        <nav-bar class="home-nav">
          <div class="adress" slot="left">
            重庆
            <van-icon name="arrow-down" />
          </div>
          <div slot="center">
            <van-search class="search" placeholder="请输入搜索关键词" v-model="value" />
          </div>
          <div slot="right">
            <van-button class="btn-dl" type="primary" to="/login">登录</van-button>
          </div>
        </nav-bar>

        <swiper />
        <icons />
        <icons-wc />
        <preferential />
        <holiday />
        <tickets />
      </main>
    </scroller>
    <div style="height:50px"></div>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import Swiper from "./children/Swiper";
import Icons from "./children/Icons";
import IconsWc from "./children/IconsWc";
import Preferential from "./children/Preferential";
import Holiday from "./children/Holiday";
import Tickets from "./children/Tickets";

// import Scroll from "@components/common/scroll/Scroll";
import { getHomeData } from "@network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Icons,
    IconsWc,
    Preferential,
    Holiday,
    Tickets
    // Scroll
  },
  data() {
    return {
      result: null,
      value: ""
      // isLoading: false //控制下拉刷新的加载动画
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
  },
  created() {
    getHomeData().then(res => {
      this.result = res;
    });
  }
};
</script>
<style scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%; /* 有header的时候可能会出现滚动条，所以最好高度是除去header的高度 */
  /* top: 40px; 一般页面有header的时候需要留出header的高度 */
  /* bottom: 20px; */
}
.adress {
  color: #000;
}
.home-nav {
  color: #fff;
}
.search {
  margin-top: -7px;
}
.van-search__content {
  border-radius: 5px;
}
.van-button--primary {
  border-radius: 10px;
  height: 32px;
  width: 50px;
  background-color: #ccc;
  border: 1px solid #ccc;
}
.van-button--normal {
  line-height: 32px;
}
.van-button--normal {
  padding: 0 5px;
}
</style>