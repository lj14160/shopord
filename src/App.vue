<template>
  <div id="app">
    <mt-header title="外卖平台">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/tu1.jpg" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="./assets/tu1.jpg" />
        订单
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="./assets/tu1.jpg" />
        发现
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/tu1.jpg" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:'home'
    }
  },
  methods:{

  },
  watch:{
    selected:function(newV){
      this.$router.push({name:this.selected})
    }
  }
};
</script>

<style lang="less" scope>
</style>
