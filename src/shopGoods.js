let obj={}

obj.savegoods=function(goodList){
    window.localStorage.setItem('goodList',JSON.stringify(goodList))
}

//获取所有商品
obj.getGoods=function(){
    return JSON.parse(window.localStorage.getItem('goodList')||'{}')
}

//增加商品
obj.addgoods=function(good){
    let goodlist=this.getGoods()
    if(goodlist[good.id]){
        goodlist[good.id].buyNum=good.goodsD.buyNum
    }else{
        goodlist[good.id]=good.goodsD
    }
    this.savegoods(goodlist)
}

//获取商品总数
obj.getTotal=function(){
    let goodList=this.getGoods()
    let val=obj.values(goodList)
    let sum=0
    val.forEach(val=>sum+=val)
    return sum
}

obj.delete=function(){
    window.localStorage.clear()
}
export default obj