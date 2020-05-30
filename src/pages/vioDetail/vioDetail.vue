<template>
  <div>
    <div class="info_container">

        <a-descriptions
          title="事件详情"
          bordered
          :column="2"
        >
          <a-descriptions-item label="违规事件ID">
            {{$route.params.eventID}}
          </a-descriptions-item>
          <a-descriptions-item label="车间ID">
            {{$route.params.wsID}}
          </a-descriptions-item>
          <a-descriptions-item label="发生时间">
            2020.5.14 12:00
          </a-descriptions-item>
          <a-descriptions-item label="违规相关人员">
            王五 (违规人员)
          </a-descriptions-item>
          <a-descriptions-item label="事件负责人">
            张三 (安全员)
          </a-descriptions-item>
          <a-descriptions-item label="事件当前状态">

            <a-timeline>
              <a-timeline-item color="green">
                事件发生
              </a-timeline-item>
              <a-timeline-item color="red">
                正在处理
              </a-timeline-item>
              <a-timeline-item color="gray">
                处理完成
              </a-timeline-item>
            </a-timeline>
          </a-descriptions-item>
          <a-descriptions-item label="违规原因">
            未带安全帽
          </a-descriptions-item>
          <a-descriptions-item label="截图">
            <img src="/api/test1.png" alt="no data yet" style="height: 200px">
          </a-descriptions-item>
        </a-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vioDetail',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.info_container{
  background-color: white;
}
</style>
