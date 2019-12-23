<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <a href>
        <div class="icon-img">
          <img class="icon-img-center" :src="item.imgUrl" alt />
        </div>
        <div class="icon-text">
          <p>{{item.desc}}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Icons",
  data() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
        },
        {
          id: "02",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票"
        },
        {
          id: "05",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
        }
      ]
    };
  }
};
</script>
<style scoped>
.icons {
  width: 100%;
  padding-bottom: 50%;
  display: flex;
  flex-direction: row;
}
.icon {
  width: 20%;
}
.icon-img img {
  display: block;
  text-align: center;
  width: 70%;
  margin: 5px 10px;
}
.icon-text {
  text-align: center;
}
</style>