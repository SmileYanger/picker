<template>
<div class="box">
  <header-bar :title="title"></header-bar>
  <div>
    <mt-field label="标题" placeholder="请输入标题" class="mt20" :key="1"></mt-field>

    <!-- 小区 -->
    <mt-field label="小区" placeholder="请输入小区名称" class="border-bottom" :key="2"></mt-field>

    <!-- 区域   -->
    <mt-field label="区域" placeholder="请输入详细地址" class="border-bottom mt20" :key="3">
        <i class="line">|</i>
        <i class="iconfont">&#xe609;</i>
    </mt-field>


    <!-- 楼层   -->
    <mt-field label="楼层"  class="border-bottom mt20" @click.native="showModel(slots1, 'louceng')"  v-model="t1"  :key="4">
        <i class="iconfont arrow ">&#xe666;</i>
    </mt-field>
    <!-- 装修   -->
    <mt-field label="装修"  class="border-bottom mt20" @click.native="showModel(slots2, 'zhuangxiu')"  v-model="t2" :key="5">
        <i class="iconfont arrow ">&#xe666;</i>
    </mt-field>

    <picker :slots="slots" @confirm='confirm' @cancel="cancel" v-show="modelState"></picker>
    <!-- 售价 -->
    <div class="price mt20">
      <span>售价</span>
      <input type="text" placeholder="请输入金额">
      <i class="yuan">元</i>
      <label>
         <mt-radio
          v-model="value"
          :options="options">
        </mt-radio>
      </label>
    </div>

  </div>
</div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.bus=new Vue()

import Picker from 'common/relese/picker.vue'
import HeaderBar from 'common/headerbar.vue'
export default {

  name: 'HouseSale',
  components:{
    HeaderBar,
    Picker
  },
  data () {
    return {
      title:"房屋出售",
      text:'请选择',
      text1:'',
      value:'',
      t1:'请选择楼层',
      t2:'请选择装修',
      modelState: false,
      options: [
        {
          label: '选项A',
          value: 'A'
        }
      ],
      slots:[],
      slots1: [
        {
          flex: 1,
          values: ['一楼','二楼','三楼','四楼'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: ' ',
          className: 'slot2'
        }, {
          flex: 1,
         values: ['共1层','共2层','共3层','共4层'],
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      slots2: [
          {
            flex: 1,
            values: ['一室','二室','三室','四室'],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex:  1,
          }, {
            divider: true,
            content: ' ',
            className: 'slot2'
          }, {
            flex: 1,
           values: ['0厅','1厅','2厅','3厅'],
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: ' ',
            className: 'slot4'
          },{
            flex: 1,
            values: ['0卫','1卫','2卫','3卫'],
            className: 'slot5',
            textAlign: 'center'
          }
      ],
      flag: ''
    }
  },
  methods: {
    showModel(txt, flag){
      this.modelState=true
      console.log(txt,1)
      this.slots=txt
      this.flag = flag
    },
    cancel () {
      this.modelState=false
    },
    confirm () {
      this.modelState=false
    },
 },
 mounted:function(){
      var _this=this
      this.bus.$on('change',function(value){
        console.log("返回值"+value)
        console.log(_this.flag)
        if (_this.flag === 'louceng') {
          _this.t1=value
        } else if (_this.flag === 'zhuangxiu') {
          _this.t2=value
        }
      })
 }

}
</script>

<style lang="stylus" scoped>
.box >>> .mint-radiolist-title
  margin 0
.box >>> .mint-cell-title
  width 70px
.box >>> .mint-cell-wrapper
  padding 0 0.24rem
  line-height 1rem
  box-sizing border-box
.box >>> .mint-radiolist-label
    text-align right
.box >>> .mint-radiolist-label
    padding 0 0
.box >>> .mint-radio-core
    width 15px
    height 15px
.box >>> .mint-radio-label
    font-size 0.28rem
    color #333
.box >>> .mint-cell-text
    font-size .3rem
    color #333
.box >>> .mint-cell:last-child
  background-image none
.box >>> .mint-field-core
  font-size .28rem
  color #ccc
  text-align right
  &::-webkit-input-placeholder /* WebKit, Blink, Edge */
    color #ccc
    font-size .28rem
  &:-moz-placeholder /* Mozilla Firefox 4 to 18 */
    color #ccc
    font-size .28rem
  &::-moz-placeholder  /* Mozilla Firefox 19+ */
     color #ccc
     font-size .28rem
  &:-ms-input-placeholder  /* Internet Explorer 10-11 */
     color #ccc
     font-size .28rem
.box >>> .mint-field.is-textarea
  .mint-field-core
    text-align left
    padding-top 0.1rem
.box >>> .picker-selected
.mt20
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
.line
   padding 0 0.2rem 0.1rem
   font-size .3rem
   font-weight 300
   color #ccc
.iconfont
  color #3d8afe
.arrow
  font-size .4rem
  padding-left .1rem
  color #999
.budge
  font-size .28rem
  color #666
  margin-left 0.05rem

.price
  line-height 1rem
  width 100%
  padding 0 0.25rem
  box-sizing border-box
  font-size 0.3rem
  background white
  color #333
  display flex
  input
    text-align right
    padding-right 0.05rem
    width 150px
    flex 1
    &::-webkit-input-placeholder /* WebKit, Blink, Edge */
      color #ccc
      font-size .28rem
    &:-moz-placeholder /* Mozilla Firefox 4 to 18 */
      color #ccc
      font-size .28rem
    &::-moz-placeholder  /* Mozilla Firefox 19+ */
       color #ccc
       font-size .28rem
    &:-ms-input-placeholder  /* Internet Explorer 10-11 */
       color #ccc
       font-size .28rem
  span
    width 100px
    display inline-block
  .yuan
    margin-right 0.5rem
    margin-top 0.04rem
    font-size .28rem
  label
    text-align right
    float right
    width 100px
</style>
