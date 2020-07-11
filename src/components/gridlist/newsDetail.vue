<template>
  <div class="detail">
      <topnav title="新闻详情"></topnav>
      <div class="topTitle">
          <h1>{{newsDetail[0].title}}</h1>
          <p>
              <span class="click">{{newsDetail[0].click}}次点击</span>
              <span class="sort">分类</span>
              <span class="time">添加时间：{{newsDetail[0].time|momentTime('YYYY-MM-DD')}}</span>
          </p>
      </div>
      <div class="contnet">{{newsDetail[0].content}}</div>
  </div>
</template>

<script>
export default {
    created(){
        const ids=this.$route.query.id
        console.log(ids)
    },
    data(){
        return {
           newsDetail:[
               {
                   id:1,
                   title:'标题一',
                   click:0,
                   time:new Date('2018/09/06'),
                   content:'本课程是整套的vue课程，包含vue全家桶、vue脚手架集成、vue商城项目实战、SSR服务器渲染。通过宣传得到了不错的好评，希望来学习的小伙伴帮忙多宣传一下。有什么问题加我微信 ：mjj1015481875'
               }
           ]
        }
    },
    methods:{
        async getNewsDetail(){
            const id=this.route.query.id
            // const {data:res}=await this.$http.get(`getnew/${id}`)
            // this.newsDetail=res.data
        }
    }
}
</script>

<style lang="less" scoped>
  .detail{
      padding-top:40px
  }
  .topTitle{
      margin-bottom: 10px;
      font-size: 15px;
      text-align: center;
      border-bottom: 1px solid #031245;
      box-shadow: 0 2px 1px grey;
  }
  p{
    position: relative;
    width: 100%;
    height: 40px;
    .click{
        position: absolute;
        bottom: 2px;
        left: 5px;
        width: 80px;
        color: #031460;
    }
    .sort{
        position: absolute;
        bottom: 2px;
        left: 30%;
    }
    .time{
        position: absolute;
        bottom: 2px;
        right: 2px;
    }
  }
</style>>

