<template>
<div class="home">
  <group>
	<cell title="domes" link="/domes"></cell>
	<cell title="github" link=""></cell>
  </group>
</div>
</template>
<script>
/**
 * 首页
 * 参考原型: [vux官方dom]
 *
 * 部分重要功能
 * 1.dom示例链接,github链接
 * 2.侧边信息栏
 * 
 * @author hsh-heshenghuan-[2018/07/28 18:15, 2018/07/28 19:01]
 */
  import { Cell, Group } from 'vux'
  export default{
  	components:{
  	  Cell,
  	  Group
  	},
    data(){
      return{

	}
  }
 }
</script>
<style lang="less" socped>
  .home{padding-top: 20vh}
</style>