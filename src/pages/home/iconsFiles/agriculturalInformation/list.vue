<template>
<div class="box">
		<div class="title">
        <i class="iconfont" @click="Goback">&#xe671;</i>
        农业信息
    </div>
    <scrollTab></scrollTab>
    <list></list>
</div>
</template>

<script>

import scrollTab from 'common/scrollTab'
import List from 'common/List'
export default {
  name: 'MM',
  components:{
    scrollTab,
    List
  },
  data () {
    return {
     
    }
  },
  methods:{
    Goback(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box >>> .ly-tab
    background-color white!important
    border-bottom 0
    margin-bottom 0.2rem
  .title
    padding .6rem .35rem .2rem
    background rgb(247, 246, 246)
    font-size .32rem
    color #000
    position relative
    text-align center
    letter-spacing 1px
    .iconfont
      width value
      position absolute
      left .35rem
      color green
      
</style>