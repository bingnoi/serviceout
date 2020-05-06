<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo">

      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <!-- <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">
            <router-link to="/nav1" style="color: white">nav 1</router-link>
          </span>
        </a-menu-item> -->

        <a-sub-menu key="menu1">
          <span slot="title"><a-icon type="user"/><span>园区总览</span></span>
          <a-menu-item key="sub1"><router-link to="/overall" style="color: white">总览页</router-link></a-menu-item>
          <a-menu-item key="sub2"><router-link to="/overall_log" style="color: white">工作日志总览</router-link></a-menu-item>
        </a-sub-menu>
        <!-- <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item> -->
        <a-sub-menu key="manu2">
          <span slot="title"><a-icon type="user" /><span>监控场景列表</span></span>
          <a-menu-item key="sub3">车间详情</a-menu-item>
          <a-menu-item key="sub4"><router-link to="/site" style="color: white">监控现场</router-link></a-menu-item>
          <a-menu-item key="sub5">人员名单</a-menu-item>
          <a-menu-item key="sub6">日志记录</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="5">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="bar-chart" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="cloud-o" />
          <span class="nav-text">nav 5</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="appstore-o" />
          <span class="nav-text">nav 6</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{overflow: 'initial', padding: 0, margin: 0}">
        <div :style="{background: 'white', textAlign: 'center' }">
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
