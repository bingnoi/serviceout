<template>
  <div>
    <div class="list-container1">
      <div class="list-title1">
        工人列表
      </div>
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
          >
            <a @click="changeName(item.name, item.ID, item.wsID)" slot="title">{{ item.name }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <span slot="description" style="margin-right: 30px;">工人id: {{item.ID}}</span>
            <span slot="description">所属车间: {{item.wsID}}</span>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div class="list-container2">
      <div class="list-title1">
        出勤记录列表
      </div>
      <a-spin :spinning="spin">
        <info
          :name="this.name"
          :ID="this.ID"
          :wsID="this.wsID"
          ></info>
      </a-spin>
    </div>
  </div>
</template>

<script>
import info from './components/info'

export default {
  name: 'find',
  data () {
    return {
      spin: false,
      name: '张三',
      ID: '10001',
      wsID: '1000',
      data: [
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '王五',
          ID: '10002',
          wsID: '1001'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        },
        {
          name: '张三',
          ID: '10001',
          wsID: '1000'
        }
      ]
    }
  },
  methods: {
    changeName (e, f, g) {
      console.log(f)
      this.spin = true
      setTimeout(() => {
        this.spin = false
        this.name = e
        this.ID = f
        this.wsID = g
      }, 1000)
    }
  },
  components: {
    info
  }
}
</script>

<style scoped>
.list-container1{
  width: 30%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: left
}
.list-container2{
  text-align: left;
  width: 55%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  right: 20px;
  top: 30px;
}
.list-title1{
  font-size: 30px;
  margin: 10px;
  margin-left: 30px;
}
</style>
