<template>
	<!-- 列表 -->
    <div class="phone-list">
        <div class="list-item border-bottom">
            <div class="list-left">
                <h3 >广大银行（锦业路支行）<span> 营业厅</span></h3>
                <p class="address"> 
                     <span> 524米</span>
                    <i class="line">|</i>
                    <i class="iconfont"> &#xe611; </i>
                    <span>西安市雁塔区绿地世界城</span>
                </p>
                <p class="number">800-826-8856</p>
            </div>
            <img src="../../../../assets/images/phone.png">
        </div>
        <div class="list-item border-bottom">
            <div class="list-left">
                <h3 >广大银行（锦业路支行）<span> 营业厅</span></h3>
                <p class="address"> 
                     <span> 524米</span>
                    <i class="line">|</i>
                    <i class="iconfont"> &#xe611; </i>
                    <span>西安市雁塔区绿地世界城</span>
                </p>
                <p class="number">800-826-8856</p>
            </div>
            <img src="../../../../assets/images/phone.png">
        </div>
        <div class="list-item border-bottom">
            <div class="list-left">
                <h3 >广大银行（锦业路支行）<span> 营业厅</span></h3>
                <p class="address"> 
                     <span> 524米</span>
                    <i class="line">|</i>
                    <i class="iconfont"> &#xe611; </i>
                    <span>西安市雁塔区绿地世界城</span>
                </p>
                <p class="number">800-826-8856</p>
            </div>
            <img src="../../../../assets/images/phone.png">
        </div>
        <div class="list-item border-bottom">
            <div class="list-left">
                <h3 >广大银行（锦业路支行）<span> 营业厅</span></h3>
                <p class="address"> 
                     <span> 524米</span>
                    <i class="line">|</i>
                    <i class="iconfont"> &#xe611; </i>
                    <span>西安市雁塔区绿地世界城</span>
                </p>
                <p class="number">800-826-8856</p>
            </div>
            <img src="../../../../assets/images/phone.png">
        </div>
    </div>
</template>

<script>
export default {

  name: 'PhoneList',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
@import "~styles/varibles.styl"
.phone-list
    padding 0 .25rem
    background white
    .list-item
        padding 0.36rem 0
        height 1.88rem
        display flex
        align-items center
        box-sizing border-box
        .list-left
            flex 1
        h3
            font-size .32rem
            color darkTextColor
            span
                line-height .28rem
                padding 0.05 0.1rem
                border 1px solid #3d8afe
                font-size .2rem
                letterSpaceing()
                border-radius .08rem
                margin-right .2rem
                 box-sizing border-box
        .address
            font-size .26rem
            color #999
            padding .1rem 0
            .line
                color #999
                margin 0 .2rem
            .iconfont
                margin-right .1rem
                font-size .26rem
        .number
                font-size .24rem
                color #999
        img
            width 0.68rem
            height 0.68rem 
</style>