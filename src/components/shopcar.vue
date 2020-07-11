<template>
    <div class="car">
        <div v-for='(item,index) in goods' :key="index">
            <div class="pic">
                <mt-switch></mt-switch>
                <img :src="item.src" alt="图片加载失败">
            </div>
            <p class="title">{{item.info}}</p>
            <div class="tool">
                <span>￥{{item.sellPrice}}</span>
                  <span @click="reduce(index)">-</span>
                  <span>{{item.buyNum}}</span>
                  <span @click="add(index)">+</span>
                  <span>删除</span>
            </div>    
        </div>
        <footer>
                累计购买<span>{{totalNum}}</span>件,共计<span>{{totalMoney}}</span>元
        </footer>
    </div>
</template>
<script>
import shopGoods from '../shopGoods.js'
export default {
    created(){
        this.goods=shopGoods.getGoods()
    },
    data(){
        return {
            goods:{},
            // totalNum:0,
            // totalMoney:0
        }
    },
    methods:{
        reduce(index){
          if(this.goods[index].buyNum>0){
              this.goods[index].buyNum--
          }
        },
        add(index){
           this.goods[index].buyNum++
        }
    },
    computed:{
        totalNum:function(){
            let num=0
            let goods=this.goods
            for (var index in goods){
                 num+=goods[index].buyNum
            }
            this.$parent.num=num
            return num
        },
        totalMoney:function(){
            let money=0
            let goods=this.goods
            for (var index in goods){
                 money+=goods[index].sellPrice*goods[index].buyNum
            }
            
            return money
        }
    }
}
</script>
<style lang="less" scoped>
  .car{
      width: 100%;
      padding: 50px 0 80px 0;
      .pic{
          width:100%;
          height: 100px;
          display: flex;
          img{
              margin-left: 20px;
              width: 30%;
          }
      }
      .title{
          padding-left: 10px;
          line-height: 30px;
          font-size:20px;
          color:blue;
      }
      .tool{
          padding-left: 10px;
          line-height: 30px;
          span:nth-child(2){
              margin-left: 15px;
              display: inline-block;
              border: 1px solid grey;
              width: 20px;
              text-align: center;
              font-size: 25px;
              color: red;
              font-weight: 900;
          }
          span:nth-child(3){
              display: inline-block;
              border-top: 1px solid grey;
              border-bottom: 1px solid grey;
              width: 40px;
              text-align: center;
              font-size: 25px;
          }
          span:nth-child(4){
              margin-right: 15px;
              display: inline-block;
              border: 1px solid grey;
              width: 20px;
              text-align: center;
              font-size: 25px;
              color: red;
              font-weight: 900;
          }
          span:nth-child(5){
              color: skyblue;
          }
      }
      footer{
              position: fixed;
              bottom: 50px;
              width: 100%;
              box-sizing: border-box;
              padding-right:20px ;
              background-color: #00f203;
              line-height: 30px;
              text-align: right;
              font-size: 20px;
              span{
                //   display: inline-block;
                  font-size: 25px;
              }
          }

  }
</style>