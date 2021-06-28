<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    name:'worklog',
    data: function () {
      return {
        chartData: {
          columns: ['日期', '出勤情况'],
          rows: [
            { '日期': '4/1', '出勤情况': 0.75},
            { '日期': '4/2', '出勤情况': 0.85},
            { '日期': '4/3', '出勤情况': 0.99},
            { '日期': '4/4', '出勤情况': 0.88},
            { '日期': '4/5', '出勤情况': 0.91},
            { '日期': '4/6', '出勤情况': 0.99}
          ]
        }
      }
    }
  }
</script>