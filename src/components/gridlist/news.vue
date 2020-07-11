<template>
  <div class="newsList">
    <topnav title="新闻列表"></topnav>
    <ul>
      <li v-for="(item) in newList" :key="item.id" @click='to(item.id)'>
        <div class="left">
          <img :src="item.img" alt="加载失败" />
        </div>
        <div class="right">
          <p class="title">{{item.title}}</p>
          <p class="sumary">{{item.sumary}}</p>
          <p class="bottom">
            <span class="zan">点赞数：{{item.click}}</span>
            <span class="time">发表时间：{{item.time|newTime}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import i1 from "../../../static/newsimg/3.jpg";
import i2 from "../../../static/newsimg/4.jpg";
export default {
  created() {
    this.getNewList();
  },
  data() {
    return {
      newList: [
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i1,
          click: 10,
          time: new Date(),
          id: 1
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 2
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 3
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 4
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 5
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 6
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 7
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 8
        },
        {
          title: "自由的风景，空气都是甜的",
          sumary: "我们都是站在桥上的人",
          img: i2,
          click: 3,
          time: new Date(),
          id: 9
        }
      ]
    };
  },
  methods: {
    async getNewList() {
      // 获取新闻列表
      // const {data:res}=await this.$http.get('getnewlist')
      // this.newList=res.data
    },
    //跳转到新闻详情
    to(newsid){
      this.$router.push({name:'detail',query:{id:newsid}})
    }
  }
};
</script>

<style lang="less" scoped>
.newsList {
  height: 100%;
  padding-top: 40px;
  padding-bottom: 49px;
  ul {
    width: 100%;
    li {
      display: flex;
      margin-top: 5px;
      list-style: none;
      width: 100%;
      height: 100px;
      overflow: hidden;
      .left {
        width: 30%;
        height: 100%;
        img {
          width: 90%;
        }
      }
      .right {
        position: relative;
        width: 70%;
        height: 100%;
        .title {
          font-weight: 900;
          margin-bottom: 5px;
        }
        .sumary {
          margin-bottom: 5px;
        }
        .bottom {
        //   position: relative;
          .zan {
            position: absolute;
            left: 0px;
            bottom: 1px;
            color: #f00;
            font-size: 5px;
            margin-right: 10px;
          }
          .time {
            position: absolute;
            right: 10px;
            bottom: 1px;
            font-size: 5px;
          }
        }
      }
    }
  }
}
</style>>

