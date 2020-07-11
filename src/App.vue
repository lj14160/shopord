<template>
  <div id="app">
    <mt-header title="外卖平台" :fixed='true'>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mt-tabbar v-model="selected" :fixed='true'>
      <mt-tab-item id="home">
        <i class='iconfont icon-dingdan'></i>
      </mt-tab-item>
      <mt-tab-item id="order">
        <i class='iconfont icon-huiyuan'></i>
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <i class='iconfont icon-icon-test1'></i>
        <mt-badge size="small" color="#f00" class="carBall" v-show="num">{{num}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <i class='iconfont icon-icon-test2'></i>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
 beforeRouterUpdate(){
   this.selected=this.$route.params(name)
 },
  data(){
    return {
      selected:'',
      num:0
    }
  },
  watch:{
    selected:function(newV){
      this.$router.push({name:this.selected})
    }
  }
};
</script>

<style lang="less" scope>
.mint-tab-item .iconfont{
  font-size:35px;
}
.carBall{
  position: relative;
  top: -20px;
  z-index: 10;
}
</style>
