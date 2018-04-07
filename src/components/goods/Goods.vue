<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="item in goods">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li v-for="item in goods">
					<h1>{{item.name}}<span>大家喜欢吃，才叫真好吃</span></h1>
					<ul>
						<li class="flist" v-for="food in item.foods">
						    <div class="goodsinfo">
						    	<img :src="food.icon">
						    	<div class="dec">
						    	    <p class="fname">{{food.name}}</p>
						    	    <p class="finfo">{{food.info}}</p>
						    	    <p class="fs">月售{{food.sellCount}}份</p>
						    		<p class="price">￥{{food.price}}</p>
						    	</div>
						    </div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
    import {mapGetters} from 'vuex'
	export default{
		created(){
			this.$store.dispatch('getGoods');
		},
		computed:mapGetters([
             'goods'
		])
	}
</script>
<style lang="less" scoped="">
	.goods{
		display: flex;
		position: absolute;
		top: 6.6em;
		bottom: 4em;
		overflow: hidden;
		.menu-wrapper{
           flex: 0 0 7em;
           background-color: #f8f8f8;
           li{
           	height: 3em;
           	line-height: 3em;
           	border-bottom: 1px solid #cecece;
           	text-align: center;
           	font-size: .32rem;
           }
		}
		.foods-wrapper{
			.flist{
				margin-top: 1em;
			}
			flex: 1;
			margin-left: .7em;
			h1{
               height: 2em;
               line-height: 2em;
               padding-left: 0.5em;
               font-weight: 700;
               font-size: 16px;
               border-bottom: 1px solid #cccccc;
               color: #666;
			}
			h1>span{
               font-size: 14px;
               color: #cccccc;
               padding-left: 0.8em;
			}
			.goodsinfo
			{
				display: flex;
			}
			.goodsinfo .dec{
				flex: 1;
				padding-left:0.5em;
				.fname{
					font-weight: 700;
				}
				.finfo{
					height: 1em;
					font-size: 10px;
					color: #C0C0C0;
					overflow : hidden;
					margin-top: 0.4em;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				.fs{
					margin-top: 0.4em;
					color: #A9A9A9;
					font-size: .266667rem;
				}
				.price{
					color: Coral;
					margin-top: 0.4em;
				}
			}
			img{
				width: 4.5em;
				height: 4.5em;
			}
		}
	}
</style>