<template>
<div style="width: 100%; display: flex;">
  <ws-card v-for="item in listData"
           :key="item.key"
           :id="item.WSid"
           :state="item.state"
           :num_all="item.number_all"
           :num_cul="item.number_current"
           ></ws-card>

  <!-- <div style="width: 100%;">

    <a-list item-layout="vertical"
            size="large"
            :pagination="pagination"
            :data-source="listData"
            :bordered="true"
            style="background-color: white">

      <div slot="footer"><h3>车间列表</h3></div>
      <a-list-item slot="renderItem" key="item.key" slot-scope="item">
          <img
            slot="extra"
            width="272"
            alt="logo"
            :src="item.src"
          />
        <a-list-item-meta :description="'车间id: '+item.WSid">
          <a  slot="title">
            {{ item.name }}
          </a>
        </a-list-item-meta>
        到岗情况:  {{ item.number_current }} / {{ item.number_all }} <br/><br/>
        当前状态: <a-icon
                  :type="item.state?'check':'close'"
                  :style="item.state?'color: green':'color: red'"></a-icon>
                  <br/><br/>
      <router-link to="/site/startLog">车间现场</router-link><br/><br/>
      </a-list-item>
    </a-list>
  </div> -->
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
</style>
