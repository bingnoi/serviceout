<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" style="color: white;text-align: center">
        This is LOGO
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="menu-1">
          <a-icon type="appstore-o" />
          <span class="nav-text"><router-link to="/wslist" style="color: white">车间列表</router-link></span>
        </a-menu-item>

        <a-sub-menu key="menu-2">
          <span slot="title"><a-icon type="user"/><span>违规管理</span></span>
          <a-menu-item key="menu-2_sub-1"><router-link to="/viomanage" style="color: white">违规记录操作</router-link></a-menu-item>
          <a-menu-item key="menu-2_sub-2"><router-link to="/start_log" style="color: white">生成开工日志</router-link></a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="menu-3">
          <span slot="title"><a-icon type="user"/><span>基础信息管理</span></span>
          <a-menu-item key="menu-3_sub-1"><router-link to="/workerInfo" style="color: white">工人信息</router-link></a-menu-item>
          <a-menu-item key="menu-3_sub-2"><router-link to="/wsInfo" style="color: white">车间信息</router-link></a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="menu-4">
          <span slot="title"><a-icon type="user"/><span>考勤数据库管理</span></span>
          <a-menu-item key="menu-4_sub-1"><router-link to="/overall" style="color: white">违规记录操作</router-link></a-menu-item>
          <a-menu-item key="menu-4_sub-2"><router-link to="/overall_log" style="color: white">生成开工日志</router-link></a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="menu1">
          <span slot="title"><a-icon type="user"/><span>园区总览</span></span>
          <a-menu-item key="sub1"><router-link to="/overall" style="color: white">总览页</router-link></a-menu-item>
          <a-menu-item key="sub2"><router-link to="/overall_log" style="color: white">工作日志总览</router-link></a-menu-item>
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{overflow: 'initial', padding: 0, margin: 0}">
        <div :style="{background: 'rgb(225, 240, 255)', textAlign: 'center' , padding: '24px'}">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        sentinel系统为您服务
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
</style>
