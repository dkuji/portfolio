import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import link from '@/components/link'
import carrer from '@/components/carrer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/link',
      component: link
    },
    {
      path: '/carrer',
      component: carrer
    }
  ]
})
