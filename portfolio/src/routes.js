import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import profile from '@/components/profile'
import skill from '@/components/skill'
import link from '@/components/link'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/link',
      name: 'link',
      component: link
    }
  ]
})
