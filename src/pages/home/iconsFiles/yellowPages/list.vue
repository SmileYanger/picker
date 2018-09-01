<template>
	<div class="wapper">
		<swiper></swiper>
		<search></search>
		<div class="box">
			<div class="news">
				<div class="news-left">
					<div class="title">最新入驻</div>
					<div class="detial">国美电器成功入驻扶风商圈安徽拨付给发</div>
					<div class="tip">
						<div>5折狂欢购</div>
						<div>最高减1000元</div>
					</div>
				</div>
				<div class="news-right">我要入驻</div>
			</div>
		</div>
		<icons :list="iconList"></icons>
		<div class="shop">
			<div class="top">
				<div class="title">热门商家</div>
				<div class="more">更多<span class="iconfont">&#xe666;</span></div>
			</div>
			<div class="bottom">
				<div class="item">
					<img src="">
					<div class="name">万达影楼</div>
					<div class="address">
						<span class="iconfont">&#xe611;</span>
						<span class="detial">新区南二路</span>
					</div>
				</div>
				<div class="item">
					<img src="">
					<div class="name">万达影楼</div>
					<div class="address">
						<span class="iconfont">&#xe611;</span>
						<span class="detial">新区南二路</span>
					</div>
				</div>
				<div class="item">
					<img src="">
					<div class="name">万达影楼</div>
					<div class="address">
						<span class="iconfont">&#xe611;</span>
						<span class="detial">新区南二路</span>
					</div>
				</div>
			</div>
		</div>
		<navbar class="navbar"></navbar>
	</div>
</template>

<script>
import Search from 'common/Search'
import Swiper from 'common/Carousel'
import Icons from 'common/Icons'
import Navbar from 'common/Navbar'
export default {
  name: 'list',
  components: {
  	Search,
  	Swiper,
  	Icons,
  	Navbar
  },

  data () {
    return {
    	iconList:[]
    }
  },
   methods: {
    getHomeInfo () {
      this.$http.get('/hydata.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if( res.ret && res.data ) {
        const data = res.data
        this.iconList = data.iconList
      }
    }
  },
   mounted () {
    this.getHomeInfo()
  },
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
  // carousel组件相关
.wapper >>> .mint-swipe
	height 3.60rem
.wapper >>> .mint-swipe-indicators
  	.mint-swipe-indicator
	    width 13px
	    height 4px
	    border-radius 2px
	    background-color #FFF
	    opacity 1
  	.is-active
	    vertical-align bottom
	    width 8px
	    height 8px
	    border-radius 50%
	    border 4px solid #fe9b26
    	background-color rgba(0, 0, 0, 0.1)
	.wapper
		.box
			width 100%
			height 1.70rem
			display flex
			justify-content center
			.news
				position absolute
				top 3.28rem
				width 7rem
				height 1.82rem
				background-color #fff
				border-radius 5px
				padding 0.2rem 0.4rem
				box-sizing border-box
				display flex
				justify-content space-between
				align-items center
				.news-left
					display flex
					width 4.2rem
					flex-direction column
					border-right 1px dashed #ccc
					padding-right 0.4rem
					box-sizing border-box
					.title
						font-size 0.38rem
						color #ff4750
					.detial
						font-size 0.28rem
						color #666
						ellipsis()
					.tip
						display flex
						text-align center
						margin-top 0.16rem
						:first-child,:last-child
							border-radius 3px 0 3px 3px
							background-color #fe9b26
							color #fff
							height 0.3rem
							line-height 0.3rem
							font-size 0.2rem
						:first-child
							width 1.1rem
							margin-right 0.16rem
						:last-child
							width 1.46rem
				.news-right		
					margin-left 0.4rem
					width 1.5rem
					height 0.65rem
					line-height 0.65rem
					text-align center
					background-color #ff757b
					color #fff
					border-radius 0.1rem
		.shop
			display flex
			flex-direction column
			background-color #FFF
			padding 0.3rem 0.25rem
			.top
				display flex
				justify-content space-between
				margin-bottom 0.3rem
				align-items center
				.title
					font-size 0.3rem
					font-weight bold
				.more
					font-size 0.28rem
					color #666
				.iconfont
					margin-left 0.14rem
			.bottom
				display flex
				justify-content space-between
				.item
					position relative
					img
						width 2.2rem
						height 2.2rem
					.name,.address
						position absolute
						left 0.12rem
					.name
						bottom 0.54rem
						font-size 0.26rem
						color #fdc245
					.address
						bottom 0.14rem
						font-size 0.22rem
						// color #fff
						.iconfont
							font-size 0.26rem
		.navbar
			margin-top 0.2rem
</style>