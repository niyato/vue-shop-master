<template>
   <div class="star-evaluation">
      <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star" @click="selectStar(index,$event)" v-model="score"></span>
    </div>
</template>
<script>
  const LENGTH = 5;
  const CLS_ON = 'icon-grade-full'; // 全星
  const CLS_HALF = 'icon-grade-half'; // 半星
  const CLS_OFF = 'icon-grade-empty'; // 空星

  export default{
      props: {
        propScore: { // 传入的变量
          type: Number
        }
      },
      data: function () {
        return {
          score: ''
        }
      },
      methods: {
        selectStar: function (index, event) {
          console.log(event.target)
         // 点击当前星星索引值+1
          this.score = index + 1;
        }
      },
      computed: {
        //* 计算显示星星
        itemClasses () {
          let result = []; // 返回的是一个数组,用来遍历输出星星
          let score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
          let hasDecimal = score % 1 !== 0; // 非整数星星判断
          let integer = Math.floor(score); // 整数星星判断
          for (let i = 0; i < integer; i++) { // 整数星星使用on
            result.push(CLS_ON);// 一个整数星星就push一个CLS_ON到数组
          }
          if (hasDecimal) { // 非整数星星使用half
            result.push(CLS_HALF);// 类似
          }
          while (result.length < LENGTH) { // 余下的用无星星补全,使用off
            result.push(CLS_OFF);// 类似
          }
          return result;
        }
      }
  }
 
</script>
<style lang="less" scoped>
  .icon-grade-full{
    background-image: url(../../assets/2.png);
  }
  .icon-grade-half{
  	background-image: url(../../assets/3.png);
  }
  .icon-grade-empty{
  	background-image: url(../../assets/1.png);
  }
</style>
