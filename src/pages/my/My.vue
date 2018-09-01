<template>
  <div>
    <div class="head">
      <div class="avatar_title">
        <button class="avatar">
          <img src="../../assets/images/home/list.png" alt="">
        </button>
        <span class="login">登录/注册</span>
      </div>
      <div class="message">
        <img src="../../assets/images/home/hot2.png" alt="">
        <span>个人信息</span>
      </div>
    </div>
    <news-release></news-release>
    <div class="content">
      <div class="mine">
        <mt-cell title="我的收藏" is-link></mt-cell>
        <div class="line"></div>
        <mt-cell title="我的浏览" is-link></mt-cell>
      </div>
      <div class="user">
        <mt-cell title="用户反馈" is-link></mt-cell>
        <div class="line"></div>
        <mt-cell title="系统设置" is-link></mt-cell>
      </div>
    </div>    
    <tabbar></tabbar>
    <release v-show="showModel"></release> 
  </div>
</template>

<script>
  import Tabbar from 'common/Tabbar'
  import NewsRelease from './components/newsRelease'
  import Release from '@/pages/release/Release'

  export default {
    name: 'My',
    components: {
      Tabbar,
      NewsRelease,
      Release
    },

    data() {
      return {
        showModel:''
      }
    },
    mounted:function(){
      var _this=this
      this.bus.$on('',function(value){
        _this.showModel=value
      })      
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .head
    position relative
    height 3.85rem
    background-color rgb(216, 242, 255)
    overflow hidden
    .avatar_title
      margin-top 1.16rem
      .avatar
        height 1.28rem
        width 1.28rem
        border-radius 50%
        overflow hidden
        margin 0.1rem 0.3rem 0 0.5rem
        img
          width 1.12rem
          height 1.12rem

      .login
        font-size 0.32rem
        color rgb(51, 51, 51)
        font-weight 600
        letter-spacing 2px
    .message
      width 2.1rem
      height 0.78rem
      background-color #87cafa
      border-top-left-radius 20px
      border-bottom-left-radius 20px
      position absolute
      bottom 1.15rem
      right 0
      img
        width 0.4rem
        margin 0.3rem 0.1rem 0.3rem 0.23rem
      span
        color #fff
        margin-top 0.23rem
        font-size 12px

  .mine
    margin-top 0.15rem
    background-color #fff
    font-size 0.3rem
    color rgb(51, 51, 51)
    .line
      border-bottom 0.01rem solid rgb(238, 238, 238)
      margin-left 0.1rem

  .user
    margin-top 0.15rem
    background-color #fff
    font-size 0.3rem
    color rgb(51, 51, 51)
    .line
      border-bottom 0.01rem solid rgb(238, 238, 238)
      margin-left 0.1rem
</style>
