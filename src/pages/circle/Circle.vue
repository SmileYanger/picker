<template>
  <div>
    <h2>圈子</h2>    
    <tabbar></tabbar>
    <release v-show="showModel"></release> 
  </div>
</template>

<script>
  import Tabbar from 'common/Tabbar'
  import Release from '@/pages/release/Release'

  export default {
    name: 'myCircle',
    components: {
      Tabbar,
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
  
</style>
