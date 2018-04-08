<template>
	<div class="ratings">
		<div class="rh">
			<div class="rc">
				<strong class="overview-kSMyE">{{seller.score}}</strong>
				<p class="overview-1SY0_">综合评价</p>
				<p class="overview-1rZNb">高于周边商家 {{seller.rankRate}}%</p>
			</div>
			<div class="overview-__cAg">
			    <div class="overview-3hlIX">
			        <span>服务态度</span>
			        <span class="overview-3LAY5">
			            <div class="Rating-wrapper_TYbDrku_0">
			                <div class="Rating-gray_1kpffd5_0">
			                    <img :src="src1">
			                </div> 
			                <div class="Rating-actived_GBtiHkB_0" :style="'width:'+ seller.serviceScore/5*100 +'%;'">
			                    <img :src="src2">
			                </div>
			            </div>
			            <span class="overview-qiEAZ">{{seller.serviceScore}}</span>
			        </span>
			    </div>
			    <div class="overview-3hlIX">
			        <span>菜品评价</span>
			        <span class="overview-3LAY5">
			            <div class="Rating-wrapper_TYbDrku_0">
			                 <div class="Rating-gray_1kpffd5_0">
			                    <img :src="src1">
			                </div> 
				            <div class="Rating-actived_GBtiHkB_0" :style="'width:'+ seller.foodScore/5*100 +'%;'">
				                <img :src="src2">
				            </div>
			            </div>
			            <span class="overview-qiEAZ">{{seller.foodScore}}</span>
			        </span>
			    </div>
			    <div class="overview-3hlIX"><span>送达时间</span>
			    <span class="overview-3LAY5">35分钟</span>
                </div>
            </div>
		</div>

		<div class="rlist">
			<ul>
				<li v-for="ritem in ratings">
					 <div class="rinfo">
				    	<img class="plogo" :src="ritem.avatar">
				    	<div class="dec">
				    	    <p class="fname">{{ritem.username}}<span>{{ritem.rateTime | dateFrm}}</span></p>
				    	    <div class="overview-__cAg">
				    	       <div class="overview-3hlIX">
							        <span class="overview-3LAY5">
							            <div class="Rating-wrapper_TYbDrku_0">
							                <div class="Rating-gray_1kpffd5_0">
							                    <img :src="src1">
							                </div> 
							                <div class="Rating-actived_GBtiHkB_0" :style="'width:'+ ritem.score/5*100 +'%;'">
							                    <img :src="src2">
							                </div>
							            </div>
							        </span>
							    </div> 
				    	    </div>
				    	    <p class="fs">{{ritem.sellCount}}</p>
				    		<p class="price">{{ritem.text}}</p>
				    	</div>
				    </div>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>

    import {mapGetters} from 'vuex'
    import moment from 'moment'
	export default{
		created(){
			this.$store.dispatch('getRatings');
		},
		computed:{
			...mapGetters([
			'seller',
            'ratings',
            'src1',
            'src2'
		    ])
	    },
	    filters:{
            dateFrm: el => {
	            return moment(el).format("YYYY-MM-DD HH:mm:ss");  //转换时间戳为时间格式
	        }
	    }
	}


</script>

<style lang="less" scoped="">
    .ratings{
    	position: absolute;
	    top: 7em;
	    width: 100%;
	    overflow-y: auto;
	    bottom: 2em;
    }
	.rh{
		height: 5em;
		line-height: 1.5em;
		display: flex;
		margin-top: 1em;
		.rc{
			width: 7em;
			text-align: center;
			border-right: 1px solid #ddd;
			padding: 0 1em 0 1em;
			.overview-kSMyE{
				font-size: 1.64rem;
			    line-height: 1;
			    color: #ff6000;
			    font-weight: 700;
			    display: block;
			}
			.overview-1SY0_{
				font-size: .32rem;
			}
		    .overview-1rZNb{
		    	font-size: .266667rem;
                color: #999;
		    }
		}
		.overview-__cAg{
			flex: 1;
		    font-size: .373333rem;
		    line-height: 2;
		    margin-left: 2em;
		    .overview-3hlIX {
			    width: 80%;
			    font-size: .32rem;
			    .overview-3LAY5, .overview-qiEAZ {
				    padding-left: .266667rem;
				    padding-left: 2.666667vw;
				    .Rating-wrapper_TYbDrku_0 {
					    position: relative;
					    overflow: hidden;
					    display: inline-block;
					    .Rating-actived_GBtiHkB_0, .Rating-gray_1kpffd5_0 {
						    display: -webkit-flex;
						    display: flex;
						}
						.Rating-actived_GBtiHkB_0 {
						    position: absolute;
						    top: 0;
						    left: 0;
						    overflow: hidden;
						}
						.overview-qiEAZ {
						    color: #f60;
						}
					}
				}
			}
		}
	}

	.rlist{
		background-color: #fff;
	    padding: .266667rem .32rem 0;
	    /* padding: 2.666667vw 3.2vw 0; */
	    font-size: .36rem;
		margin-top: 1em;
		li{
			padding: 1.4rem 1.4rem;
		    border-bottom: .013333rem solid #ddd;
		    border-bottom: .133333vw solid #ddd;
		}
		.rinfo
		{
			display: flex;
		}
		.rinfo .dec{
			flex: 1;
			padding-left:0.5em;
			.fname{
				font-weight: 700;
				span{
					padding-left: 1em;
				}
			}
			.overview-__cAg{
				flex: 1;
			    font-size: .373333rem;
			    line-height: 2;
			    margin-left: -1em;
			    .overview-3hlIX {
				    width: 80%;
				    font-size: .32rem;
				    .overview-3LAY5, .overview-qiEAZ {
					    padding-left: .266667rem;
					    padding-left: 2.666667vw;
					    .Rating-wrapper_TYbDrku_0 {
						    position: relative;
						    overflow: hidden;
						    display: inline-block;
						    .Rating-actived_GBtiHkB_0, .Rating-gray_1kpffd5_0 {
							    display: -webkit-flex;
							    display: flex;
							}
							.Rating-actived_GBtiHkB_0 {
							    position: absolute;
							    top: 0;
							    left: 0;
							    overflow: hidden;
							}
							.overview-qiEAZ {
							    color: #f60;
							}
						}
					}
				}
			}
			.fs{
				margin-top: 0.4em;
				color: #A9A9A9;
			}
			.price{
				color: Coral;
				margin-top: 0.4em;
			}
		}
		.plogo{
			width: 4.5em;
			height: 4.5em;
		}
	}
</style>