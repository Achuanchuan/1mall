<template>
  <div>
    <h3>热门推荐</h3>
    <van-tabs type="card" animated color="#0ac8e0">
      <van-tab v-for="item of month" :key="item.id" :title="item.title">
        <div class="recommend">
          <van-grid :column-num="3" :border="false" :square="true">
            <van-grid-item v-for="index in item.monthText" :key="index.id">
              <a :href="index.link">
                <img :src="index.img" alt />
                <div class="day">
                  <p>{{index.title}}</p>
                  <span>{{index.text}}</span>
                </div>
              </a>
            </van-grid-item>
          </van-grid>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data() {
    return {
      month: [
        {
          id: "01",
          title: "1月/春节",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "02",
          title: "2月",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "03",
          title: "3月",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "04",
          title: "4月/清明",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "05",
          title: "5月/五一",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "06",
          title: "6月/端午",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "07",
          title: "7月",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        },
        {
          id: "08",
          title: "8月",
          monthText: [
            {
              id: "01",
              img: require("@assets/img/location/recommends/tui1.jpg"),
              title: "一月去哪玩",
              text: "新年新旅程"
            },
            {
              id: "02",
              img: require("@assets/img/location/recommends/tui2.jpg"),
              title: "寒假遛娃地盘点",
              text: "最佳亲子旅行地"
            },
            {
              id: "03",
              img: require("@assets/img/location/recommends/tui3.jpg"),
              title: "春节好去处",
              text: "老城里找年味儿"
            },
            {
              id: "04",
              img: require("@assets/img/location/recommends/tui4.jpg"),
              title: "北京",
              text: "合家出行游故宫"
            },
            {
              id: "05",
              img: require("@assets/img/location/recommends/tui5.jpg"),
              title: "三亚",
              text: "陪你去天涯海角"
            },
            {
              id: "06",
              img: require("@assets/img/location/recommends/tui6.jpg"),
              title: "哈尔滨",
              text: "冰雪奇缘初体验"
            }
          ]
        }
      ]
    };
  },
  components: {}
};
</script>
<style scoped>
.day p {
  font-size: 14px;
  font-weight: bolder;
}
.day span {
  font-size: 12px;
  color: #999999;
}
.van-grid-item img {
  width: 100%;
  border-radius: 5px;
}
.recommend {
  padding: 10px 8px 0 6px;
}
.van-tabs__nav--card .van-tab.van-tab--active{
  background-color: #0ac8e0;
}
.van-tabs__nav--card{
  border: 1px solid #0ac8e0;
}
h3{
  font-weight: bolder;
  padding: 10px 12px;
}
</style>