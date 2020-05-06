<template>
<div style="display:flex">

  <div class="vio-wrapper">
    <div style="margin: 10px;font-size: 20px;text-align:left; font-weight: 700">报警记录</div>
    <hr style="color: #eee">
    <a-table :columns="columns" :data-source="tableData" @change="onChange"/>
  </div>

  <div class="table">
    <div style="margin: 10px;font-size: 20px;text-align:left; font-weight: 700">在岗人数</div>
    <hr style="color: #eee">
    <ve-pie :data="pieData" width="300px"></ve-pie>
  </div>

</div>
</template>

<script>
import axios from 'axios'

function onChange (pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}

export default {
  name: 'vioManage',
  data () {
    return {
      columns: [],
      tableData: [],
      pieData: {}
    }
  },
  methods: {
    onChange,
    getInfo () {
      axios.get('/api/chart.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.columns = res.data.columns
        this.tableData = res.data.tableData
        this.pieData = res.data.pieData
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>
.vio-wrapper{
  width: 700px;
  margin:30px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 4px 10px #888888
}
.table{
  margin: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 4px 10px #888888
}
</style>
