<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/header/Header.vue'
export default {
  components: {
    'v-header': Header
  }
}
</script>
<style lang="less" scoped>
  #app .tab{
    display: flex;
    width: 100%;
    height: 3em;
    line-height: 3em;
    border: 1px solid #cecece;
    border-color: 1px solid lighten(#cccccc, 10%);
    .tab-item{
      flex:1;
      text-align:center;
      & > a{
        font-size: 14px;
        display: block;
        &.router-link-active{
          color: #ff7300;
        }
      }
    }
  }
</style>
