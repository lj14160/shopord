<template>
  <div class="goodsDetail">
    <topnav title="商品详情" class="nav"></topnav>
    <div class="lunbo">
      <mt-swipe :auto="2000" class="mtS" :show-indicators="false">
        <mt-swipe-item v-for="(item,i) in lunboList" :key="i">
          <img :src="item.img" alt />
          <!-- {{item.img}} -->
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="detail">
      <h2>{{goodsDetail.info}}</h2>
      <p class="price">
        市场价:
        <span class="oldP">￥{{goodsDetail.oldPrice}}</span>
        销售价:
        <span class="sellP">￥{{goodsDetail.sellPrice}}</span>
      </p>
      <p class="num">
        购买数量:
        <span class="l" @click="reduce()">-</span>
        <span class="c">{{buyNum}}</span>
        <span class="r" @click="plus()">+</span>
      </p>
      <p>
        <mt-button type="primary" class="buy" @click="buy">立即购买</mt-button>
        <mt-button type="danger" class="car" @click="toCar">加入购物车</mt-button>
        <transition name="show" @after-enter="afterEnter" @leave="leave">
          <span class="ball" v-if="show"></span>
        </transition>
      </p>
    </div>
    <div>
      <p>商品参数</p>
      <p>商品货号：{{id}}</p>
      <p>库存情况: {{goodsDetail.num}}</p>
      <p>上架时间: {{dat|momentTime('YYYY-MM-DD')}}</p>
    </div>
    <div class="goto">
      <div class="pic" @click="goto('detail')">图文介绍</div>
      <div class="shop" @click="goto('picDetail')">商品评论</div>
    </div>
  </div>
</template>
<script>
import i1 from "../../assets/lunboimg/1.jpg";
import i2 from "../../assets/lunboimg/2.jpg";
import i3 from "../../assets/lunboimg/3.jpg";
import shopGoods from '../../shopGoods.js'
export default {
  created() {
    this.getDate();
    this.goodsDetail = this.$route.query.goods;
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.goodsDetail = to.query.goods;
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(555);
    this.goodsDetail = to.query.goods;
    next();
  },
  data() {
    return {
      lunboList: [
        { img: i1, id: 1 },
        { img: i2, id: 2 },
        { img: i3, id: 3 }
      ],
      goodsDetail: {},
      buyNum: 1,
      id: 14160,
      dat: "",

      //xiaoqiu
      show: false
    };
  },
  methods: {
    getDate() {
      this.dat = new Date();
    },
    reduce() {
      if (this.buyNum > 0) {
        this.buyNum--;
      }
    },
    plus() {
      this.buyNum++;
    },
    goto(pathName) {
      this.$router.push({ name: pathName });
    },
    //加入购物车
    toCar() {
      this.show = true;
      shopGoods.addgoods({
        id:this.goodsDetail.id,
        goodsD:{
          buyNum:this.buyNum,
          src:this.goodsDetail.src,
          sellPrice:this.goodsDetail.sellPrice,
          info:this.goodsDetail.info
        }
      })
      console.log(shopGoods.getGoods())
    },
    buy(){
      shopGoods.delete()
    },
    afterEnter(){
      this.show=false
    },
    leave(){
      this.$parent.num=this.buyNum
    }
    
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.goodsDetail {
  padding: 40px 0 45px 0;
  width: 100%;
  
  .lunbo {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 2%;
    margin-bottom: 5px;
    .mtS {
      height: 200px;
      border: 1px solid grey;
      border-radius: 5%;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
  .detail {
    box-sizing: border-box;
    width: 100%;
    padding-left: 5px;
    padding-top: 5px;
    border: 1px solid grey;
    border-radius: 2%;
    h2 {
      color: blue;
      border-bottom: 2px solid grey;
    }
    p {
      line-height: 30px;
      font-size: 18px;
      .oldP {
        text-decoration-line: line-through;
        margin-right: 30px;
        margin-left: 10px;
      }
      .sellP {
        margin-left: 10px;
        color: red;
      }
    }
    .num {
      .l {
        margin-left: 10px;
        display: inline-block;
        border: 1px solid grey;
        text-align: center;
        width: 25px;
        height: 18px;
        line-height: 18px;
      }
      .c {
        display: inline-block;
        width: 40px;
        line-height: 18px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        text-align: center;
      }
      .r {
        display: inline-block;
        border: 1px solid grey;
        text-align: center;
        width: 25px;
        height: 18px;
        line-height: 18px;
      }
    }
    .car {
      margin-left: 20px;
      margin-bottom: 5px;
    }
  }
  .goto {
    margin-top: 5px;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 2%;
    .pic {
      width: 100;
      border: 2px solid skyblue;
      color: skyblue;
      text-align: center;
      line-height: 30px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .shop {
      width: 100;
      border: 2px solid red;
      color: red;
      text-align: center;
      line-height: 30px;
      font-weight: 900;
    }
  }
  .ball {
    position: relative;
    left: -60px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
  }
}
.show-enter-active {
  animation: show-in .5s .1s;
}
// .show-leave-active {
//   animation: show-in 0.5s reverse;
// }
@keyframes show-in {
  0% {
    transform:translate3d(0,0,0);
  }
  25%{
    transform: translate3d(30px,-40px,0);
  }
  50% {
    transform:translate3d(60px,0px,0);
  }
  100% {
    transform: translate3d(60px,160px,0);
  }
}
</style>