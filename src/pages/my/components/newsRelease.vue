<template>
  <div class="newsRelease">
    <div class="item">
      <img src="../../../assets/images/home/hot.png" alt="">
      <div>我的消息</div>
      <div v-if="true" class="news"></div>
    </div>
    <div class="item">
      <img src="../../../assets/images/home/hot.png" alt="">
      <div>我的发布</div>
    </div>
    <div class="item">
      <img src="../../../assets/images/home/hot.png" alt="">
      <div>我的活动</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" type="text/stylus">
  .newsRelease
    display flex
    justify-content space-around
    height 1.48rem
    background-color #fff
    .item
      text-align center
      margin 0.2rem 0.3rem
      position relative
      img
        width 0.5rem
        margin 0.15rem 0
      div
        font-size 0.28rem
        color rgb(51, 51, 51)
      .news
        width 10px
        height 10px
        border-radius 50%
        background-color red
        position absolute
        top 3px
        right 11px
</style>
