<template>
  <div>
    <div class="list-container">
      <a-card v-for="item in vioList" :key="item.id" :title="'测试事件' + item.id" style="width: 80%;margin: 10px auto">
        <router-link :to="'vioDetail/'+item.id+'/'+item.wsID" tag="a" slot="extra">more</router-link>
        <div>
          <span style="margin-right: 50px"><b>所属车间id:</b>   {{item.wsID}}</span>
          <span style="margin-right: 50px"><b>事件发生时间:</b>  {{item.time}}</span>
          <span style="margin-right: 50px"><b>当前处理状态:</b>  {{item.state}}</span>
        </div>
      </a-card>

    </div>
  </div>
</template>

<script>
export default {
  name: 'vioManage',
  data () {
    return {
      vioList: [
        {
          id: '001',
          time: '2020.5.14 12:00',
          wsID: '1000',
          state: 'unhandled'
        }, {
          id: '002',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'unhandled'
        }, {
          id: '003',
          time: '2020.5.14 12:00',
          wsID: '1002',
          state: 'unhandled'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list-container{
  text-align: left;
  display: flex;
  flex-direction: column;
}
</style>
