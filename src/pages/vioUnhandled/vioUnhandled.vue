<template>
  <div>
    <div class="list-container">
      <a-card v-for="item in vioList" :key="item.id" :title="'测试事件' + item.id" style="width: 80%;margin: 10px auto">
        <router-link :to="'vioHandling/'+item.id+'/'+item.time" tag="a" slot="extra">处理</router-link>
        <div>
          <span style="margin-right: 50px"><b>所属车间id:</b>   {{item.wsID}}</span>
          <span style="margin-right: 50px"><b>事件发生时间:</b>  {{item.time}}</span>
        </div>
      </a-card>

    </div>
  </div>
</template>

<script>
export default {
  name: 'vioUnhandled',
  data () {
    return {
      vioList: [
        {
          id: '001',
          time: '2020.5.14 12:00',
          wsID: '1000',
          state: 'processing'
        },
        {
          id: '002',
          time: '2020.5.14 12:00',
          wsID: '1000',
          state: 'processing'
        },
        {
          id: '003',
          time: '2020.5.14 12:00',
          wsID: '1000',
          state: 'processing'
        },
        {
          id: '004',
          time: '2020.5.14 12:00',
          wsID: '1000',
          state: 'processing'
        }, {
          id: '005',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'processing'
        }, {
          id: '006',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'processing'
        }, {
          id: '007',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'processing'
        }, {
          id: '008',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'processing'
        }, {
          id: '009',
          time: '2020.5.14 12:00',
          wsID: '1001',
          state: 'processing'
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
