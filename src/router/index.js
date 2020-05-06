import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import overall from '@/pages/overall/overall.vue'
import overallLog from '@/pages/overall_Log/overall_Log'
import site from '@/pages/site/site'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/overall',
      children: [
        {
          path: 'overall',
          name: 'overall',
          component: overall
        },
        {
          path: 'overall_log',
          name: 'overall_log',
          component: overallLog
        },
        {
          path: 'site',
          name: 'site',
          component: site
        }
      ]
    }
  ]
})
