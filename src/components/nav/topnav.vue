<template>
  <div class="topnav">
    <span @click="goback" class="goback">&lt;</span>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods:{
      goback(){
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="less" scoped>
.topnav {
  position: relative;
  width: 100%;
  background-color: skyblue;
  height: 30px;
  line-height: 30px;
  font-weight: 900;
  .goback {
    position: absolute;
    left: 50px;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
}
</style>>

