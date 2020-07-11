<template>
  <div class="picDetail">
    <topnav title="图文详情" class="nav"></topnav>
    <div class="title">
      <h1>{{wordList.title}}</h1>
      <span>发行日期：{{wordList.data|momentTime('YYYY-MM-DD')}}</span>
      <span>{{wordList.look}}次浏览</span>
      <span>分类:{{wordList.sort}}</span>
    </div>
    <!-- <div class="pic">
      <img v-for="(item,i) in wordList.img" :key="i" :src="item" alt />
    </div>-->

    <!-- 预览图 -->
    <vue-preview :slides="slide1"></vue-preview>
    <article>{{wordList.word}}</article>
    <div class="comment">
       <mt-button type="primary" size="large" @click="postText">评论</mt-button>
       <textarea placeholder="提交你的评论" v-model="textValue"></textarea>
       <div class="sp"><span>评论列表</span><span>{{commentList.length}}条评论</span></div>
       <ul>
         <li v-for="(item,index) in commentList" :key='index' :class="index===commentList.length-1?'bor':''">匿名用户：{{item.value}}<span>{{item.dtime|retime}}</span></li>
       </ul>
       <mt-button type="danger" size="large" @click='getMore'>加载更多</mt-button>
    </div>
  </div>
</template>
<script>
import pic1 from "../../assets/lunboimg/1.jpg";
import pic2 from "../../assets/lunboimg/2.jpg";
import pic3 from "../../assets/lunboimg/3.jpg";
export default {
  created(){
      this.getcomment()
  },
  data() {
    return {
      wordList: {
        title: "现代简约",
        data: new Date(),
        look: 1,
        sort: "民生经济",
        img: [pic1, pic2, pic3, pic3, pic2, pic1],
        word: `
                cube-ui 是由滴滴开源的基于 Vue.js 实现的移动端组件库。 功能特性：质量可靠 由滴滴内部组件库精简提炼而来，经历了业务一年多的考验，并且每个组件都有充分单元测...
                软件类型：手机Web开发框...|授权协议：Apache|开发语言：JavaScript
                `
      },
      //预览图
      slide1: [
        {
          src: pic1,
          msrc: pic1,
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: pic2,
          msrc: pic2,
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: pic3,
          msrc: pic3,
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        }
      ],
      commentList:[
        {
          value:'品论11',
          dtime:new Date()
        },
        {
          value:'品论11',
          dtime:new Date()
        },
        {
          value:'品论11',
          dtime:new Date()
        },
        {
          value:'品论11',
          dtime:new Date()
        },
      ],
      more:[
        {
          value:'评论222',
          dtime:new Date()
        },
        {
          value:'评论222',
          dtime:new Date()
        },
        {
          value:'评论222',
          dtime:new Date()
        },
      ],
      textValue:''
    };
  },
  methods:{
    getcomment(){
      //  let cid=this.$router.params.id
      //  console.log(cid)
      //  const {data:res}=await this.$http.get(`getcomments/${cid}?pageindex=1`)
      //  const commentList=res.data
     },
     postText(){
       if(this.textValue!=''){
        //  this.$http.post();
        this.commentList.unshift({value:this.textValue})
        this.textValue=''
       }else{
         this.$toast({
           message:'品论不能为空',
           duration: 500
         })
       }
     },
     getMore(){
       if(this.commentList.length>20){
         this.$toast({
           message:'没有更多数据了',
           duration:500
         })
       }else{
         this.commentList=[...this.commentList,...this.more]
       }
       
     }
  }
};
</script>
<style lang="less" scoped>
.picDetail {
  width: 100%;
  
  padding-top: 40px;
  padding-bottom: 145px;
  h1 {
    text-align: left;
    color: skyblue;
    font-size: 25px;
    margin: 10px 0;
  }
  span {
    display: inline-block;
    margin-left: 10px;
  }
  .pic {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    img {
      flex: 1;
      width: 30%;
      margin: 5px 5px;
    }
  }
  article {
    margin-top: 10px;
    font-size: 15px;
    width: 100%;
  }
  .comment{
    margin-top: 50px;
    width: 100%;
    textarea{
      display: block;
      width: 100%;
      line-height: 20px;
      font-size:20px
    }
    .sp{
       display: flex;
       width: 100%;
       justify-content: space-between;
    }
    li{
      padding-left: 10px;
      border-top: 2px solid rgba(10,30,56,0.5);
      line-height:25px;
    }
  }
  .bor{
    border-bottom: 2px solid rgba(10,30,56,0.5);
    margin-bottom: 5px;
  }
}
</style>