<template>
	<div class="seller">
	    <div class="hader">
	    	<h3 class="hader-title">配送信息</h3>
            <div class="delivery-36amC">
                <div><span class="delivery-2YA1c">蜂鸟专送</span><span>约57分钟送达，距离1.8km</span></div>
                <div class="delivery-ps">配送费￥8</div>
            </div>
	    </div>
		<section class="section">
		   	<h3 class="section-title">活动与服务</h3>
		   	<div  class="activity-2iOA8">
		   		<div class="activity-1hPHa activity-25cwN" v-for="support in seller.supports">
		   		 
		   		   <span class="activity-3dUjU">{{support.description}}</span>
		   		</div>
		   	</div>
		</section>

		<div data-v-55b29b2f="">
		   <section class="section">
		        <h3 class="section-title">商家信息</h3>
		        <ul class="detail-1_W84">
		            <li>乐凯撒（上海大悦城）如有问题或者建议欢迎您的来电021-60405022</li>
		            <li><span>品类</span><span>炸鸡炸串, 披萨意面</span></li>
		            <li><span>商家电话</span><span><span>021---60405022</span></span></li>
		            <li><span>地址</span><span>上海市闸北区西藏北路198号B102-08号商铺</span></li>
		            <li><span>营业时间</span><span>10:00-22:00</span></li>
		        </ul>
		    </section>
		    <section class="section">
		        <a href="" class="section-title detail-1wFyo">营业
                    
                </a>
                <ul v-for="item in seller.pics">
                	<li><img :src="item" alt=""></li>
                </ul>
            </section>
        </div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		created(){
			this.$store.dispatch('getSeller');
		},
		computed:mapGetters([
             'seller'
		])
	}
</script>

<style lang="less" scoped>
    body{
    	background: #666;
    }
    .seller{
    	position: absolute;
	    top: 7em;
	    overflow-y: auto;
	    bottom: 2em;
    }
	.hader{
		margin-bottom: .266667rem;
		margin-bottom: 2.666667vw;
		padding: .426667rem .4rem .4rem;
		padding: 4.266667vw 4vw 4vw;
		font-size: .346667rem;
		background-color: #fff;
		color: #666;
		border-bottom: 1px solid #eee;
		.hader-title{
			color: #000;
			font-weight: 700;
			font-size: .4rem;
			line-height: .56rem;
			line-height: 5.6vw;
		}
		.delivery-36amC{
			margin-top: .426667rem;
            margin-top: 4.266667vw;
            .delivery-2YA1c{
            	color: #fff;
				background-color: #0097ff;
				padding: .08rem 0;
				padding: .8vw 0;
				border-radius: .08rem;
				border-radius: .8vw;
            }
		}
		.delivery-36amC div{
			margin-bottom: 1.186667rem;
            margin-bottom: 1.866667vw;
		}
		.delivery-ps{
            margin-bottom: 1.186667rem;
            margin-bottom: 1.866667vw;
		}
	}
	.section{
		margin-bottom: .266667rem;
		margin-bottom: 2.666667vw;
		padding: .426667rem .4rem .4rem;
		padding: 4.266667vw 4vw 4vw;
		font-size: .346667rem;
		background-color: #fff;
		color: #666;
		border-bottom: 1px solid #eee;
		.section-title{
			color: #000;
			font-weight: 700;
			font-size: .4rem;
			line-height: .56rem;
			line-height: 5.6vw;
		}
		.activity-2iOA8{
			margin-top: .426667rem;
            margin-top: 4.266667vw;
		}
		.activity-25cwN {
		    margin-bottom: .306667rem;
		    margin-bottom: 3.066667vw;
		}
		.activity-1hPHa {
		    display: -webkit-flex;
		    display: flex;
		    font-size: .346667rem;
		    -webkit-align-items: center;
		    align-items: center;
		}
		img{
			width: 100%;
		}
	}

	.detail-1_W84 li {
	    display: -webkit-flex;
	    display: flex;
	    padding: .4rem .4rem .4rem 0;
	    padding: 4vw 4vw 4vw 0;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	    -webkit-align-items: center;
	    align-items: center;
	    margin-right: -.4rem;
	    margin-right: -4vw;
	}
	.detail-1_W84 li > span:first-child {
	    font-weight: 700;
	    color: #333;
	}
	.detail-1_W84 li > span:last-child {
	    max-width: 6.666667rem;
	    max-width: 66.666667vw;
	    text-align: right;
	}
</style>