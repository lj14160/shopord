<template>
  <div class="wordpic">
    <topnav title="图文列表" class="nav"></topnav>
    <div class="wordTop">
      <a
        v-for="(item,index) in titleList"
        :key="item.id"
        @click="changeIndex(index)"
        :class="{active:index==nowIndex}"
      >{{item.title}}</a>
    </div>
    <div class="imgCont" v-for="(item,index) in wordPic" :key="index">
      <img :src="item.src" alt="加载失败" v-if="nowIndex==0" @click='goto'/>
      <span>{{item.wor}}</span>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/lunboimg/1.jpg";
export default {
  created() {
    this.getTitleList();
    // this.getWordPic(0);
    this.nowIndex = this.$route.params.id;
    
  },
  //路由进入之前
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.nowIndex = to.params.id;
      //路由进入之前获取图文数据
      vm.getWordPic(to.params.id);
    });
  },
  //路由更新之前
  beforeRouteUpdate(to, from, next) {
    //路由更新之前获取图文数据
    this.nowIndex = to.params.id;
    this.getWordPic(to.params.id);
    next();
  },
  data() {
    return {
      titleList: [
        {
          id: 0,
          title: "全部"
        },
        {
          id: 1,
          title: "全部"
        },
        {
          id: 2,
          title: "全部"
        },
        {
          id: 3,
          title: "全部"
        },
        {
          id: 4,
          title: "全部"
        },
        {
          id: 5,
          title: "全部"
        },
        {
          id: 6,
          title: "全部"
        },
        {
          id: 7,
          title: "全部"
        }
      ],
      nowIndex: 0,
      wordPic: [
        {
          src: img1,
          wor: "文字介绍部分呢"
        },
        {
          src: img1,
          wor: "文字介绍部分呢"
        }
      ]
    };
  },
  methods: {
    async getTitleList() {
      //获取标题
      // const {data:res}=await this.$http.get('getimgcategroy')
      // this.titleList=res.data
      this.titleList.unshift({ id: 10, title: "全部all" });
    },
    async getWordPic(id) {
      //获取图文列表内容
      // const {data:res}=await this.$http.get('getimages/'+id)
      // this.wordPic=res.data
    },
    changeIndex(index) {
      this.nowIndex = index;
      //   this.getWordPic(this.nowIndex);
      this.$router.push({ name: "wordpic", params: { id: this.nowIndex } });
      if (this.nowIndex > 0) {
      console.log('shibai')
      this.$toast({
        message: "图片获取失败",
        // iconClass: "icon icon-success",
        duration: 1000
      });
    }
    },
    goto(){
      this.$router.push({name:'picDetail',query:{agg:this.nowIndex}})
    }
  }
};
</script>

<style lang='less' scope>
.wordpic {
  padding: 40px 0 45px 0;
  .wordTop {
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    a {
      display: inline-block;
      width: 80px;
      line-height: 30px;
      font-size: 20px;
      text-align: center;
      color: blue;
    }
    .active {
      background-color: #cdaf20;
    }
  }
  .imgCont {
    position: relative;
    margin-bottom: 5px;
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      top: 50%;
      left: 10px;
      font-size: 18px;
      color: red;
    }
  }
}
</style>