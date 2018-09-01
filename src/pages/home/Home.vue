<template>
  <div class="wapper">
  我是首页
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'common/Tabbar'


export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      refs:[
          '/hotInformation',  
          '/agriculturaiInformation',
          '/publicnumber',
          '/civilianTelephone',
          '/latestActivities',
          '/characteristicGoods',
          '/yellowPages',
          '/culturalTourism'
      ]
    }
  },
  components: {
    Tabbar,
 
  },
 
}
</script>


<style lang="stylus" scoped>
  .wapper
    margin-bottom 1.3rem
  // carousel组件相关
  .wapper >>> .mint-swipe-indicators
    bottom 0.4rem
  .wapper >>> .mint-swipe-indicators
    left 80%
    .mint-swipe-indicator
      width 13px
      height 4px
      border-radius 2px
    .is-active
      vertical-align bottom
      width 8px
      height 8px
      border-radius 50%
      border 4px solid #747373
  // icons组件相关
  .wapper >>> .box
      display flex 
      justify-content center
      height 3.57rem
      .icons
        width 7rem
        height 3.7rem
        position absolute
        top 3.77rem
        border-radius 5px
  // hotscroll组件相关
  .hot
    width 100%
    display flex
    align-items center
    padding 0 0.25rem
    box-sizing border-box
    height 0.85rem
    line-height 0.85rem
    background-color #FFF
    overflow hidden
    margin-bottom 0.2rem
    .hot-left
      width 30%
      span
        color #eee
        margin 0 0.08rem
        vertical-align middle
      .hot-tip
        width 1.14rem
        height 0.3rem
      .hot-hot
        width 0.35rem
        height 0.27rem
</style>
