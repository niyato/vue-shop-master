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
					<h1>{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods">
						    <img :src="food.icon">
						    <span>价格：{{food.price}}</span>
						    <span>描述：{{food.description}}</span>	
						    <span>{{food.name}}</span>
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
           flex: 0 0 10em;
           background-color: MistyRose;
           li{
           	height: 3em;
           	line-height: 3em;
           	border-bottom: 1px solid #cecece;
           	text-align: center;
           }
		}
		.foods-wrapper{
			flex: 1;
			margin-left: .7em;
			h1{
               height: 3em;
               line-height: 3em;
               padding-left: 1em;
			}
			li{

			}
			img{
				width: 4em;
				height: 4em;
			}
		}
	}
</style>