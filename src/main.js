// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VideoPlayer from 'vue-video-player'
import VCharts from 'v-charts'
import 'videojs-flash'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(Antd)
Vue.use(VideoPlayer)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
