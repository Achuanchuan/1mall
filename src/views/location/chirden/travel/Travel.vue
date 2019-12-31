<template>
  <div>
    <h3>
      <p class="h3-p">{{travel}}</p>
      <van-button class="h3-bt" type="primary" @click="alertMenu">选择时长</van-button>
      <van-action-sheet
        :close-on-click-action="true"
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        description="请选择车程时长"
      />
    </h3>
  </div>
</template>
<script>
export default {
  name: "Travel",
  data() {
    return {
      travel: "坐着火车去旅行",
      show: false,
      actions: [
        { name: "1小时可达" },
        { name: "2小时可达" },
        { name: "3小时可达" },
        { name: "4小时可达" },
        { name: "5小时可达" }
      ]
    };
  },
  methods: {
    alertMenu() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
h3 {
  font-weight: bolder;
  padding: 5px 12px;
  line-height: 30px;
}
.h3-p{
  float: left;
}
.h3-bt{
  float: right
}
.van-button{
  height: 30px;
  line-height: 30px;
}
.van-button--primary{
  background-color: #fff;
  color: #07c160;
}
</style>