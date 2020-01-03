<template>
  <div>
    <div class="problem-bt"><div class="hr"></div><p>常见问题</p><div class="hr"></div></div>
    <van-grid :gutter="10" :border="false">
      <van-grid-item v-for="item in problem" :key="item.id" :to="item.router">
        <div class="img"><img :src="item.imgUrl" alt=""></div>
        <p>{{item.title}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "Problem",
  data() {
    return {
      problem:[
        {
          id:'01',
          imgUrl:require('@assets/img/service/feiji.png'),
          title:'机票',
          router:''
        },
        {
          id:'02',
          imgUrl:require('@assets/img/service/jiudian.png'),
          title:'酒店',
          router:''
        },{
          id:'03',
          imgUrl:require('@assets/img/service/huoche.png'),
          title:'火车',
          router:''
        },
        {
          id:'04',
          imgUrl:require('@assets/img/service/menpiao.png'),
          title:'门票',
          router:''
        },
        {
          id:'05',
          imgUrl:require('@assets/img/service/travel.png'),
          title:'度假',
          router:''
        },
        {
          id:'06',
          imgUrl:require('@assets/img/service/car.png'),
          title:'用车',
          router:''
        },
        {
          id:'07',
          imgUrl:require('@assets/img/service/credentials.png'),
          title:'账号',
          router:''
        },
        {
          id:'08',
          imgUrl:require('@assets/img/service/qita.png'),
          title:'其他',
          router:''
        }
      ]
    }
  },
};
</script>
<style scoped>
.img{
  background-color: aqua;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.problem-bt p{
  text-align: center
}
.hr{
  height: 1px;
  background-color:#faf6f6;
  overflow: hidden;
  width: 70px;
  margin: 7px auto;
  padding: 0;
}
img{
  width: 30px;
  height: 30px;
  margin: 5px;
}
p{
  margin-top: 10px;
}
</style>