<template>
<div class="box">
	<div class="top">
        <i class="iconfont" @click="Goback">&#xe671;</i>
        <div class="search-bar"> 
            <i  class="iconfont ">&#xe6c6;</i>
            <input type="search" placeholder="请输入你要搜索的关键词" @click='goSearch'>
        </div>
    </div>
    <phone-icons ></phone-icons> 
    <phone-list></phone-list> 
</div>
</template>

<script>
import PhoneList from './list.vue'
import PhoneIcons from './icons.vue'
export default {

  name: 'CivilianTelephone',
  components:{
    PhoneList,
    PhoneIcons
  },

  data () {
    return {

    }
  },
  methods:{
    Goback(){
      this.$router.push('/')
    },
    goSearch(){
         this.$router.push('/searchlist')
    }
  }
}
</script>

<style lang="stylus" scoped>

    .top
      padding .48rem .35rem .2rem
      font-size .32rem
      color #000
      position relative
      text-align center
      letterSpaceing()
      height .6rem
      display flex       
      .iconfont
        line-height .6rem
      .search-bar
        height .6rem
        background green
        float right
        flex 1
        margin-left .2rem
        border-radius .3rem
        background white
        font-size 0
        .iconfont
          line-height .6rem 
        input
          height .6rem
          font-size .13rem
          letterSpaceing()
          padding-left .1rem
          width 86%
          outline none   
          vertical-align top           
</style>