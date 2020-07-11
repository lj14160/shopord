<template>
  <div class="goods">
    <topnav title="图文详情" class="nav"></topnav>
    <div class="goodList">
      <mt-loadmore class="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        @bottom-status-change="handleTopChange"
        ref="loadmore"
        :autoFill='false'
      >
        <ul>
          <li v-for="(item,index) in goods" :key="index" @click='goto(item)'>
            <div class="imgbox" >
              <img :src="item.src" alt />
            </div>
            <div class="info">{{item.info|newInfo}}</div>
            <div class="footer">
              <p class="price">
                <span>&#165;{{item.sellPrice}}</span>
                <span>&#165;{{item.oldPrice}}</span>
              </p>
              <p class="state">
                <span>{{item.state}}</span>
                <span>剩余{{item.num}}件</span>
              </p>
            </div>
          </li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus === 'drop'" :class="{ 'rotate': bottomStatus === 'drop' }">加载中</span>
          <!-- <span v-show="bottomStatus !== 'loading'">我是有底线的</span> -->
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import img1 from "../../assets/lunboimg/1.jpg";
import img2 from "../../assets/lunboimg/1.jpg";
import img3 from "../../assets/lunboimg/1.jpg";
export default {
  created() {
    this.getDoods();
  },
  filters: {
    newInfo: oldPrice => {
      return oldPrice.slice(0, 10) + "...";
    }
  },
  data() {
    return {
      goods: [
        {
          id:'1',
          src: img1,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          id:'2',
          src: img1,
          info: "华为mate30顶级",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          id:3,
          src: img2,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          id:4,
          src: img3,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          src: img1,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          src: img1,
          info: "华为mate30顶级",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          src: img2,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        },
        {
          src: img3,
          info: "华为mate30顶级旗舰",
          sellPrice: 3999,
          oldPrice: 4299,
          state: "热卖中",
          num: 99
        }
      ],
      allLoaded: false,
      num: 1,
      bottomStatus:''
    };
  },
  methods: {
    //获取商品数据
    async getDoods() {
      //    const {data:res}=this.$http.get()
      //    this.goods=res.data
    },
    //下啦获取数据
    // loadTop() {
    //   console.log("上啦");
    //   this.num++;
    //   this.$refs.loadmore.onTopLoaded();
    // },
    //上啦拉获取数据
    loadBottom() {
      // 加载更多数据
      console.log("上啦拉" + this.num);
      if (this.num > 4) {
        this.allLoaded = true; // 若数据已全部获取完毕
        
      }
      this.$refs.loadmore.onBottomLoaded();
      this.num++
    },
    handleTopChange(status) {
        console.log(status)
        this.bottomStatus = status;
      },
    goto(item){
      this.$router.push({name:'goodsDetail',query:{goods:item}})
    }
  }
};
</script>
<style lang="less" scoped>
.goods {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 45px;
  .loadmore{
      height: 550px;
      overflow: scroll;
  }
  .goodList {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        box-sizing: border-box;
        margin-bottom: 10px;
        border: 1px solid rgb(197, 191, 191);
        width: 50%;
        overflow: hidden;
        .imgbox {
          text-align: center;
          img {
            width: 100%;
          }
        }
        .info {
          font-size: 22px;
          line-height: 30px;
          text-decoration-line: underline;
          white-space: nowrap;
        }
        .footer p {
          background-color: grey;
          font-size: 15px;
          line-height: 20px;
        }
        .price span:nth-child(1) {
          color: red;
        }
        .price span:nth-child(2) {
          text-decoration-line: line-through;
        }
        .state {
          display: flex;
          span {
            flex: 1;
            justify-content: space-between;
          }
        }
        .state span:nth-child(2) {
          text-align: right;
        }
      }
    }
  }
}
</style>