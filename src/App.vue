<template>
  <div id="app">
    <xHeader :right-options="{showMore: true}" @on-click-more="actionSheet=true">
      <span>vux</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </xHeader>
    <router-view/>
    <tabbar>
      <tabbar-item v-for="(item,index) in nav" :link="item.path">
        <img slot="icon" :src="item.icon" alt=""/>
        <span slot="label">{{ item.name }}</span>
      </tabbar-item>
    </tabbar>
    <actionsheet :value="actionSheet" :menus="menus" @on-click-mask="actionSheet=false"></actionsheet>
  </div>
</template>

<script>
/**
 * 入口页
 * 参考原型: []
 *
 * 部分重要功能
 * 1.
 *
 * @author hsh-heshenghuan-[2018/07/28 15:54,2018/07/28 18:12]
 */
import { XHeader, Tabbar, TabbarItem, Actionsheet } from 'vux'
export default {
  name: 'App',
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Actionsheet
  },
  data(){
    return{
      nav:[{
        name:'Home',
        icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Know-512.png',
        path:'/',
      },{
        name:'Domes',
        icon:'https://cdn4.iconfinder.com/data/icons/creative-process-16/512/Graphic_Design-512.png',
        path:'/domes'
      }],
      /*控制更多弹窗*/
      actionSheet:false,
      /*弹窗内容*/
      menus:[{
        label:'分享给朋友',
        type:'info'
      },{
        label:'分享到朋友圈',
        type:'info'
      }]
    }
  },
  methods:{
  }
}
</script>

<style lang='less'>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
body,div,h1,h2,h3,h4,h5,h6,p,ul,li{margin: 0;padding: 0}
a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
