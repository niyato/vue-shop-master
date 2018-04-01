<template>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    	<div class="detail" v-show="detailShow">
    	<br>
    	   <h2>{{seller.name}}</h2>
    	<br>
    	   <h2>{{seller.bulletin}}</h2>
    	<br>
    	   <ul>
    	   	<li v-for="item in seller.supports"></li>
    	   </ul>      
		   <button class="close" @click="hideDetail">关闭</button>
	    </div>
    </transition>
</template>
<script>
   import {mapGetters} from 'vuex'
   import 'animate.css/animate.css'
   export default{
      computed:{
      	...mapGetters([
      		'detailShow',
      		'seller'
      	])
      },
      methods:{
      	hideDetail(){
      		this.$store.dispatch('hideDetail');
      	}
      }
   }
</script>
<style lang="less" scoped>
    .detail{
    	position: fixed;
    	top: 25%;
    	left: 0;
    	z-index: 777;
    	width: 100%;
    	height: 50%;
    	overflow: auto;
    	background-color: rgb(7,17,27,0.1);
    	opacity: 0.8;
    	color: #fff;
    	text-align: center;
    	line-height: 2em;
    	text-indent: 2em;
    	.close{
    		position: absolute;
    		bottom: 50px;
    		left: 45%;
    	}
    }
</style>