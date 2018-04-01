<template>
	<div class="header">
       <span  @click="showDetail">{{seller.name}}</span>
       <img :src="seller.avatar" @click="showDetail">
       
       <s-detail></s-detail>
    </div>
</template>
<style lang="less" scoped>
  .header{
  	height:4em;
  	background-color:LightGrey;
  	font-size:14px;
  	display:flex;
  	justify-content:center;
  	align-items:center;
  	img{
  		width:4em;
  		height:4em;
  	}
  	span{
  		color:#;
  	}
  }
</style>

<script>
    import {mapGetters} from 'vuex'
    import Detail from '../detail/Detail.vue'
	export default{
		created(){
           this.$store.dispatch('getSeller');//分发动作
		},
		computed:{
			...mapGetters([
	           'seller'
	        ]),
	        msg(){
	        	return console.log('dd');
	        }
		},
		components:{
			's-detail':Detail
		},
		methods:{
			showDetail(){
				this.$store.dispatch('showDetail');
			}
		}
	}
</script>
