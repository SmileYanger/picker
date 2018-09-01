<template>
	<div class="icons">
		<div class="icon" v-for="(item,id) of iconList" :key="item.id">
			<div class="icon-img">
				<img class="icon-img-content" :src="item.iconUrl" />
				<p class="icon-keyword">{{item.keywords}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PhoneIcons',
  data () {
    return {
        iconList: [{
        	id: '001',
        	iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        	keywords: '热点资讯'
    	},{
        	id: '002',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        	keywords: '农业信息'
    	},{
        	id: '003',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        	keywords: '服务公众号'
    	},{
        	id: '004',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        	keywords: '便民电话'
    	},{
        	id: '005',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        	keywords: '最新活动'
    	},{
        	id: '006',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        	keywords: '特色名品'
    	},{
        	id: '007',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        	keywords: '商家黄页'
    	},{
        	id: '008',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
        	keywords: '文化旅游'
    	},{
        	id: '009',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        	keywords: '服务公众号'
    	},{
        	id: '010',iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        	keywords: '便民电话'
    	}]
    }
  }
}
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	@import "~styles/mixins.styl"
	.mint-swipe
		padding 0.1rem 0.1rem 0.4rem
		box-sizing border-box
		height 3.69rem
	.icons
		overflow: hidden
		background-color #fff
		padding-bottom .25rem 
		box-sizing border-box
		margin-bottom 0.2rem
		.swipe-item
			height 100%
		.icon
			overflow hidden
			width 20%
			height 1.32rem
			float left
			position relative
			margin-top: 0.25rem
			.icon-img
				position absolute
				top 0
				left 0
				right 0
				bottom 0
				box-sizing border-box
				.icon-img-content
					width 0.86rem
					height 0.86rem
					display block
					margin 0 auto
				.icon-keyword
					position absolute
					left 0
					right 0
					bottom 0
					height .44rem
					line-height .44rem
					color $darkTextColor
					text-align center
					font-size 0.24rem
					ellipsis()
</style>