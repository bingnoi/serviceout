<template>
<div style="width: 100%; display: flex; flex-wrap: wrap; flex-direction: row">
  <ws-card v-for="item in listData"
           :key="item.key"
           :id="item.WSid"
           :state="item.state"
           :num_all="item.number_all"
           :num_cul="item.number_current"
           ></ws-card>
  <div class="pegi-container">
    <a-pagination v-model="current" :total="50" show-less-items />
  </div>
</div>
</template>

<script>
import axios from 'axios'
import wsCard from './components/wsCard.vue'

export default {
  name: 'wslist',
  components: {
    wsCard
  },
  data () {
    return {
      current: 1,
      isGood: 'close',
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 4,
        pieData: {}
      }
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/list.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.listData = res.data.listData
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
.pie-container{
  background-color: white;
  height: 400px;
  position: fixed;
  border-radius: 5px;
  right: 50px;
  border: 1px solid rgb(180, 180, 180)
}
.pegi-container{
  height: 50px;
  position: relative;
  left:870px
}
</style>
