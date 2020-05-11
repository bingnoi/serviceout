<template>
  <div>
    <a-row class="container">
      <a-col :span="11" class="upper-box">
        <div class="vio-wrapper">
          <div style="margin: 10px;font-size: 20px;text-align:left; font-weight: 700">报警记录</div>
          <hr style="color: #eee">
          <div class="table-wrapper">
            <a-table :columns="chartData.columns" :data-source="chartData.tableData" size="small"/>
          </div>
        </div>
      </a-col>

      <a-col :span="11" class="upper-box">
        <div style="margin: 10px;font-size: 20px;text-align:left; font-weight: 700">数据统计</div>
        <hr style="color: #eee">
        <!-- <div>{{}}</div> -->
        <a-radio-group @change="handleSizeChange">
          <a-radio-button v-for="(item, index) in chartData.factory" :key="item.key" :value="index">
            {{item.key}}
          </a-radio-button>
        </a-radio-group>

        <ve-pie :data="chartData.factory[wsIndex].data" :settings="chartSettings" :legend-visible="false"></ve-pie>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import 'v-charts/lib/style.css'
export default {
  name: 'upper',
  props: {
    chartData: Object
  },
  data () {
    return {
      wsIndex: 0,
      wsName: '',
      chartSettings: {
        level: [
          ['到岗', '缺勤'],
          ['安全', '危险']
        ]
      }
    }
  },
  methods: {
    handleSizeChange (e) {
      this.wsIndex = e.target.value
    }
  }
}
</script>

<style scoped>
.upper-box{
  height: 450px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 4px 10px #888888
}
.container{
  display: flex;
  justify-content: space-around
}
.table-wrapper{
  border-radius: 10px;
  border:2px solid #eee;
  padding: 10px;
  margin: 10px;
}
</style>
