<template>
<div class="domes">
  <grid :cols="3">
	<grid-item v-for="(item,index) in domes" :label="item.name" :icon="item.icon"></grid-item>
  </grid>
</div>
</template>
<script>
/**
 * dom展示页
 * 参考原型: [vux官方dom]
 *
 * 部分重要功能
 * 1.dom展示
 * 
 * @author hsh-heshenghuan-[2018/07/28 19:04, 2018/07/28 19:15]
 */
import { Grid, GridItem } from 'vux'
 export default{
  components:{
  	Grid,
  	GridItem
  },
  data(){
 	return{
 		domes:[{
 			name:'Actionsheet',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		},{
 			name:'Alert',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		},{
 			name:'Badge',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		},{
 			name:'Blur',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		},{
 			name:'Calendar',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		},{
 			name:'Card',
 			icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
 			link:''
 		}]
 	}
  }
 }
</script>
<style scoped lang="less"></style>