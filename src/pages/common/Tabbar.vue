<template>
     <div class="nav" >
        <router-link tag="div" class="tab-item" to="./home">
            <div class="tab-icon home1"></div>
            <span class="tab-link">首页</span>
        </router-link>
        <div class="tab-item" @click="showModel">
                <div class="tab-icon release"></div>
                <span class="tab-link">发布</span>
        </div>
       <router-link tag="div" class="tab-item" to="./circle">
          <div class="tab-icon circle"></div>
          <span class="tab-link">圈子</span>
      </router-link>
       <router-link tag="div" class="tab-item" to="./my">
          <div class="tab-icon my"></div>
          <span class="tab-link">我的</span>
      </router-link>

    </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.bus=new Vue()
export default {

  name: 'Tabbar',

  data() {
    return {
        active:false,
        modelStatus:true
    }
  },
  methods:{
    showModel(){
      this.bus.$emit('',this.modelStatus)
    }
  }
}

</script>
<style  scoped lang="stylus">
 .nav
        position: fixed
        height:1.28rem
        bottom: 0      
        display: flex
        width 100%
        padding-top 0.01rem
        
    .tab-item
        background white
        width 26%
        height 0.9rem
        margin-top 0.38rem
        padding-top 0.01rem
                   
   .tab-icon 
        height 0.52rem
     
     .tab-link
        line-height .38rem
        width 100%
        display block
        text-align center
        font-size 0.18em
        color #676982
    
    .router-link-exact-active .tab-link
        color #008aff      

    /*首页*/
    .home1
          background-image: url(../../assets/images/footicon/home.png)
          background-size: 0.4rem 0.38rem
          background-repeat no-repeat
          background-position center
      
    .router-link-active .home1
        background-image: url(../../assets/images/footicon/home-hover.png)
    

    /*服务*/
    .service
          background-image: url(../../assets/images/footicon/serve.png)
          background-size: 0.4rem 0.38rem
          background-repeat no-repeat
          background-position center
    .router-link-active .service
        background-image: url(../../assets/images/footicon/serve-hover.png)


    /*发布*/
    .release
          background-image: url(../../assets/images/footicon/relese.png) 
          background-size:0.83rem
          background-repeat no-repeat
          background-position center
          width 0.9rem
          height .9rem
          border-radius 50%
          margin -0.48rem auto 0
          border .05rem solid #fff  
     
     
    /*圈子*/
    .circle
          background-image: url(../../assets/images/footicon/circle.png)  
          background-size: 0.5rem 0.39rem
          background-repeat no-repeat
          background-position center
    .router-link-active .circle
        background-image: url(../../assets/images/footicon/circle-hover.png)    

    /*我的*/
     .my
          background-image: url(../../assets/images/footicon/mine.png)
          background-size: 0.4rem 0.38rem
          background-repeat no-repeat
          background-position center
    .router-link-active .my
        background-image: url(../../assets/images/footicon/mine-hover.png)    
</style>
