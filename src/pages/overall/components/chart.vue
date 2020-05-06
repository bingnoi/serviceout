<template>
  <div class="chart-wrapper">
    <div style="padding: 10px;font-size: 20px;text-align:left; font-weight: 700">安全达标率</div>
    <hr style="color: #eee"/>
    <ve-line class="chart" height="60vh" :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
export default {
  name: 'chart',
  data () {
    return {
      chartData: {
        columns: ['日期', '余额', '比率'],
        rows: [
          { '日期': '1月1日', '余额': 123, '比率': 0.3 },
          { '日期': '1月2日', '余额': 1223, '比率': 0.6 },
          { '日期': '1月3日', '余额': 2123, '比率': 0.9 },
          { '日期': '1月4日', '余额': 4123, '比率': 0.12 },
          { '日期': '1月5日', '余额': 3123, '比率': 0.15 },
          { '日期': '1月6日', '余额': 7123, '比率': 0.20 }
        ]
      },
      chartSettings: {
        'tooltip-visible': true,
        yAxisType: ['KMB']
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper{
  width: 700px;
  margin: 30px;
  background-color:rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 3px 4px 10px #888888
}
</style>
