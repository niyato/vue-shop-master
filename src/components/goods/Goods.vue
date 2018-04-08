<template>
	<div class="goods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="(item,index) in goods" @click="toType(index)" :class="{'active':index==aclass}">
					<a :href="'#'+index">{{item.name}}</a>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li v-for="item in goods">
					<h1 :id="item.type">{{item.name}}<span v-if="item.type==0">大家喜欢吃，才叫真好吃</span></h1>
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
		<v-footer></v-footer>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Footer from '../../components/footer/Footer.vue'

	export default{
		components:{
            'v-footer': Footer
		},
		created(){
			this.$store.dispatch('getGoods');
		},
		computed:mapGetters([
             'goods',
             'aclass'
		]),
		methods:{
			toType:function(index){
			    var obj = {}
			    obj.index = index;
			    this.$store.dispatch('aclass',obj);
			    // this.$nextTick(function () {
			    //     alert(index);
			    // })
	      	}
		}
	}
</script>
<style lang="less" scoped="">
    .active{
    	background: #ffffff;
    }
	.goods{
		display: flex;
		position: absolute;
		top: 6.6em;
		bottom: 4em;
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
           li>a{
           	display: block;
           }
		}
		.foods-wrapper{
			.flist{
				margin-top: 1em;
			}
			flex: 1;
			margin-left: .7em;
			overflow-y: auto;
			h1{
               height: 2em;
               line-height: 2em;
               padding-left: 0.5em;
               font-weight: 700;
               font-size: .32rem;
               border-bottom: 1px solid #cccccc;
               color: #666;
               margin-top: 1em;
			}
			h1>span{
               font-size: .32rem;
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