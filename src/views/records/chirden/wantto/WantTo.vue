<template>
  <div id="want-to">
    <div class="want-bt">
      <span></span>
      <h2>{{h}}</h2>
      <p>
        {{p}}
        <van-icon name="arrow" size="18" />
      </p>
    </div>
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item in Want" :key="item.id">
        <img :src="item.img" alt />
        <div class="want-p">
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
      h: "我想去",
      p: "查看全部",
      Want: [
        {
          id: "01",
          img: require("@assets/img/record/want/1.jpg"),
          city: "东京",
          title: "2个心愿池",
          text: "东京迪士尼乐园"
        },
        {
          id: "02",
          img: require("@assets/img/record/want/2.jpg"),
          city: "大阪",
          title: "1个心愿池",
          text: "日本环球影城"
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
.van-grid-item__content--center{
  position: absolute;
}
.want-p{
  margin-top:-60%;
  margin-left: -15%;
  /* background-color: rgba(71, 71, 131, 0.5); */
}
.want-city{
  font-size: 24px;
  font-weight: bolder;
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
  border-radius: 5px;
}
p{
  color: #fff;
  margin: 10px 0;
}
</style>