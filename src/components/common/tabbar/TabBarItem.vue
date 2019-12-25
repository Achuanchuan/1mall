<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:!isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    link: String
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    isActive() {
      return this.$route.path.indexOf(this.link);
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link) !== -1;
    }
  }
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1px;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #ff0000;
}
</style>