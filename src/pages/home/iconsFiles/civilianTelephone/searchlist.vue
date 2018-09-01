<template>
<div>
	<div class="title">
        <i class="iconfont" @click="Goback">&#xe671;</i>
        搜索列表
    </div>
	<phone-list></phone-list>	
</div>
</template>

<script>
import PhoneList from './list.vue'
export default {

  name: 'searchlist',
  components:{
  	PhoneList
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