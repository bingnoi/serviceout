<template>
  <div>
    <a-row>
      <div class="list-container">
        <a-page-header title="车间1" sub-title="车间1基础信息" @back="() => $router.go(-1)">
          <template slot="tags">
            <a-tag color="blue">Running</a-tag>
          </template>
          <template slot="extra">
            <a-button key="3">修改信息</a-button>
            <a-button key="2">联系后台</a-button>
          </template>
          <a-row type="flex">
            <a-statistic title="Status" value="正常" />
            <a-statistic
              title="车间主任"
              value="李菲菲"
              :style="{
            margin: '0 32px',
          }"
            />
            <a-statistic title="电话" value="12344534567" />
          </a-row>
        </a-page-header>
      </div>
    </a-row>
    <a-divider />
    <div class="list-container">
      <a-row type="flex" justify="center">
        <a-col :span="20">
          <a-descriptions title layout="vertical" bordered>
            <a-descriptions-item label="车间编号">1</a-descriptions-item>
            <a-descriptions-item label="安全员">王钰</a-descriptions-item>
            <a-descriptions-item label="安全员电话">15645525263</a-descriptions-item>
            <a-descriptions-item label="车间人数">186 人</a-descriptions-item>
            <a-descriptions-item label="开始生产时间" :span="2">2019-04-24 18:00:00</a-descriptions-item>
            <a-descriptions-item label="室温（更新时间 14：02）">25 ℃</a-descriptions-item>
            <a-descriptions-item label="相对湿度（更新时间 14：02）">70%RH</a-descriptions-item>
            <a-descriptions-item label="风速（更新时间 14：02）">14.15m3/min</a-descriptions-item>
            <a-descriptions-item label="光照强度（更新时间 14：02）">300LUX</a-descriptions-item>
            <a-descriptions-item label="气压（更新时间 14：02）">7kg/cm2</a-descriptions-item>
            <a-descriptions-item label="噪音（更新时间 14：02）">70dBA</a-descriptions-item>
            <a-descriptions-item label="备注信息">过去一个月内安全率全厂第二</a-descriptions-item>
          </a-descriptions>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicinfo"
};
</script>

<style>
.list-container {
  background: white;
  text-align: left;
  display: flex;
  flex-direction: column;
}
</style>