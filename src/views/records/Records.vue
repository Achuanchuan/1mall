<template >
  <div id="records">
    <nav-bar class="records-nav">
      <div class="record" slot="left">
        <p>全部订单</p>
      </div>
      <div slot="center">
        <div>我的订单</div>
      </div>
      <div slot="right"><p>实名同步</p></div>
    </nav-bar>
    <div class="record-water">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        @scrollReachBottom="fetchImgsData"
        @pullDownEnd="endMove"
      >
        <div class="img-info" slot-scope="props">
          <p class="some-info">第{{props.index+1}}张图片</p>
          <p
            class="some-info"
            v-for="item in props.value.info"
            :key="item.id"
          >{{props.value.info.text}}</p>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>
<script>
import NavBar from "@components/common/navbar/NavBar";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "Records",
  components: {
    NavBar,
    vueWaterfallEasy
  },
  data() {
    return {
      imgsArr: [],
      fetchImgsArr: [],
      openPullDown: true,
      group: 0
    };
  },
  methods: {
    initImgsArr(n, m) {
      //num 图片数量
      var arr = [];
      for (var i = n; i < m; i++) {
        arr.push({
          id: i,
          src: require(`@assets/img/water/${i + 1}.jpg`),
          link: "https://www.baidu.com",
          info: [
            {
              id: "01",
              text: "bb"
            },
            {
              id: "02",
              text: "bb"
            }
          ]
        });
      }
      return arr;
    },
    fetchImgsData() {
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); //数组拼接，把下一批要加载的图片放入所有图片的数组中
    },
    response() {
      var old = this.cols;
      this.cols = this.calcuCols();
      if (old === this.cols) return; // 列数不变直接退出
      this.beginIndex = 0; // 开始排列的元素索引
      this.waterfall();
      if (this.over) this.setOverTipPos();

      // 响应式
    },
    endMove() {
      this.ifUp = true;
      if (this.pullDistance < 200) {
        this.contentMove = "translate3d(0px, " + 0 + "px, 0px)";
        this.moveTop = -50 + "px";
      } else {
        this.contentMove = "translate3d(0px, " + 50 + "px, 0px)";
        this.moveTop = 0 + "px";
        this.ifReload = "加载中";
        // ...调用接口获取数据，成功后 ↓
        this.imgsArr = this.initImgsArr(0, 6);
        this.ifReload = "加载完成";
        setTimeout(() => {
          this.contentMove = "translate3d(0px, " + 0 + "px, 0px)";
          this.moveTop = -50 + "px";
          console.log("完成刷新");
        }, 1000);
      }
      // 下拉刷新
    }
  },
  created() {
    this.imgsArr = this.initImgsArr(0, 18); //初始化第一次（即页面加载完毕时）要加载的图片数据
    this.fetchImgsArr = this.initImgsArr(9, 18); // 模拟每次请求的下一批新的图片的数据数据
  }
};
</script>
<style scoped>
.vue-waterfall-easy-container {
  position: fixed !important;
}
p {
  font-size: 12px;
}
</style>