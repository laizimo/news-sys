import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import VideoSource from '../components/video/source.vue'
import VideoList from '../components/list/video-list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/video/source',
      component: VideoSource
    },
    {
      path: '/video/list',
      component: VideoList
    }
  ]
})
