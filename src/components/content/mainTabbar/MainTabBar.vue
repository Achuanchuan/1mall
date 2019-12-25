<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="@assets/img/tabbar/home.png" alt />
        <img slot="item-icon-active" src="@assets/img/tabbar/home1.png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/records">
        <img slot="item-icon" src="@assets/img/tabbar/record.png" alt />
        <img slot="item-icon-active" src="@assets/img/tabbar/record1.png" alt />
        <div slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item link="/location">
        <img slot="item-icon" src="@assets/img/tabbar/location.png" alt />
        <img slot="item-icon-active" src="@assets/img/tabbar/location1.png" alt />
        <div slot="item-text">目的地</div>
      </tab-bar-item>
      <tab-bar-item link="/service">
        <img slot="item-icon" src="@assets/img/tabbar/kefu1.png" alt />
        <img slot="item-icon-active" src="@assets/img/tabbar/kefu2.png" alt />
        <div slot="item-text">客服</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="@assets/img/tabbar/profile.png" alt />
        <img slot="item-icon-active" src="@assets/img/tabbar/profile1.png" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "@components/common/tabbar/TabBar";
import TabBarItem from "@components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>