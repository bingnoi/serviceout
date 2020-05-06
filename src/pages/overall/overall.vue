<template>
  <div>
    <chart></chart>
    <vio-manage></vio-manage>
  </div>
</template>

<script>
import vioManage from './components/vio-manage'
import chart from './components/chart'
export default {
  name: 'overall-log',
  data () {
    return {
    }
  },
  components: {
    vioManage,
    chart
  }
}
</script>

<style scoped>
</style>
