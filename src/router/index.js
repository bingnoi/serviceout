import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import overall from '@/pages/overall/overall.vue'
import overallLog from '@/pages/overall_Log/overall_Log'
import wsList from '@/pages/WSlist/wslist'
import site from '@/pages/site/site'
import workerInfo from '@/pages/worker_info/worker_info.vue'
import wsInfo from '@/pages/ws_info/ws_info'
import vioManage from '@/pages/viomanage/viomanage'
import vioDetail from '@/pages/vioDetail/vioDetail'
import startLog from '@/pages/startLog/startLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/wslist',
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
          path: 'wslist',
          name: 'wslist',
          component: wsList
        },
        {
          path: 'site',
          name: 'site',
          component: site
        },
        {
          path: 'workerInfo',
          name: 'workerInfo',
          component: workerInfo
        },
        {
          path: 'wsInfo',
          name: 'wsInfo',
          component: wsInfo
        },
        {
          path: 'vioManage',
          name: 'vioManage',
          component: vioManage
        },
        {
          path: 'vioDetail/:eventID/:wsID',
          name: 'vioDetail',
          component: vioDetail
        },
        {
          path: 'startLog',
          name: 'startLog',
          component: startLog
        }
      ]
    }
  ]
})
