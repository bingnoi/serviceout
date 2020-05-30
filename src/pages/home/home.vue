<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0}">
      <div class="my-logo">
        <router-link to="/">
          <img src="/api/logo.png" alt="logo" style="width: 100%">
        </router-link>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="menu-0">
          <a-icon type="appstore-o" />
          <span class="nav-text"><router-link to="/overall" style="color: white">主页</router-link></span>
        </a-menu-item>
        <a-menu-item key="menu-1">
          <a-icon type="appstore-o" />
          <span class="nav-text"><router-link to="/wslist" style="color: white">车间列表</router-link></span>
        </a-menu-item>

        <a-sub-menu key="menu-2">
          <span slot="title"><a-icon type="user"/><span>违规管理</span></span>
          <a-menu-item key="menu-2_sub-2"><router-link to="/vioUnhandled" style="color: white">未处理违规</router-link></a-menu-item>
          <a-menu-item key="menu-2_sub-1"><router-link to="/viomanage" style="color: white">违规日志</router-link></a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="menu-3">
          <span slot="title"><a-icon type="user"/><span>基础信息管理</span></span>
          <a-menu-item key="menu-3_sub-1"><router-link to="/workerInfo" style="color: white">工人信息</router-link></a-menu-item>
          <a-menu-item key="menu-3_sub-2"><router-link to="/wsInfo" style="color: white">车间信息</router-link></a-menu-item>
          <a-menu-item key="menu-3_sub-3"><router-link to="/safetyLog" style="color: white">车间安全日志</router-link></a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="menu-4">
          <span slot="title"><a-icon type="user"/><span>考勤数据库管理</span></span>
          <a-menu-item key="menu-4_sub-1"><router-link to="/find" style="color: white">出勤查询</router-link></a-menu-item>
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{overflow: 'initial', padding: 0, margin: 0}">
        <div :style="{background: 'rgb(225, 240, 255)', textAlign: 'center' , padding: '24px'}">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Sentinel系统为您服务
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import overall from '../overall/overall'
import overallLog from '../overall_Log/overall_Log'

export default {
  name: 'Home',
  components: {
    overall,
    overallLog
  }
}
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.my-logo{
  margin: 20px;
  background-color: rgb(62, 84, 94);
  border-radius: 10px;
}
</style>
