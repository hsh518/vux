import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/home/index')
const Domes = () => import('@/domes/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path: '/domes',
    	name: 'Domes',
    	component: Domes
    }
  ]
})
