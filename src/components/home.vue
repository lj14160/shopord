<template>
  <div>
    <mt-swipe :auto="2000" >
      <mt-swipe-item v-for="(item,i) in lunboList" :key="i" >
        <img :src="item.img" alt />
        {{item.img}}
      </mt-swipe-item>
    </mt-swipe>
    <div class="gridList">
      <ul>
        <li v-for="(item,i) in gridlist" :key="i">
          <router-link :to='item.path'>
            <i :class="item.class"></i>
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import i1 from "../assets/lunboimg/1.jpg";
import i2 from "../assets/lunboimg/2.jpg";
import i3 from "../assets/lunboimg/3.jpg";
export default {
  created() {
    this.getLunbo();
  },
  data() {
    return {
      lunboList: [
        { img: i1, id: 1 },
        { img: i2, id: 2 },
        { img: i3, id: 3 }
      ],
      gridlist: [
        { class: "iconfont icon-jwd-icon-data", title: "新闻资讯",path:'/news'},
        { class: "iconfont icon-picture", title: "图文分享" ,path:{name:'wordpic',params:{id:0}}},
        { class: "iconfont icon-wallet", title: "商品展示" ,path:'/goods'},
        { class: "iconfont icon-help", title: "资讯" ,path:'/more'},
        { class: "iconfont icon-voices", title: "联系我们" ,path:'/phone'}
      ]
    };
  },
  methods: {
    async getLunbo() {
      // 获取轮播图数据
      // const { data: res } = await this.$http.get("getlunbo");
      // this.lunboList=res.data.message
    }
  }
};
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  // background-color: #0f0;
}
.gridList {
  width: 100%;
  height: 100%;
  display: flex;
  ul {
    width: 100%;
    padding-left: 10%;
    li {
      list-style: none;
      display: inline-block;
      width: 33%;
      height: 40px;
      a {
        text-decoration: none;
        // width: 100%;
        // height: 40px;
        i {
          font-size: 60px;
        }
        p {
          margin-top: 1px;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>