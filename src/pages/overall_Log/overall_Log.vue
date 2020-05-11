<template>
  <div>
    <upper :chartData="chartData"></upper>
  </div>
</template>

<script>
import upper from './components/upper'
import 'video.js/dist/video-js.css'
import axios from 'axios'
export default {
  name: 'overall',
  components: {
    upper
  },
  data () {
    return {
      chartData: {}
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/chart.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.chartData = res.data
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}

</script>

<style scoped>

</style>
