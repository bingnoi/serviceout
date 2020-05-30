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
            <a @click="changeName(item.name,item.imgSrc,item.workID, item.wsID)" slot="title">{{ item.name }}</a>
            <a-avatar
              slot="avatar"
              :src="item.imgSrc"
            />
            <span slot="description" style="margin-right: 30px;">工人id: {{item.workID}}</span>
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
          :workID="this.workID"
          :wsID="this.wsID"
          :imgSrc="this.imgSrc"
          ></info>
      </a-spin>
    </div>
  </div>
</template>

<script>
import info from './components/info'
// import info from '../../../static/mock/av-1.jpg'
export default {
  name: 'find',
  data () {
    return {
      spin: false,
      name: '张三钰',
      workID: '10001',
      wsID: '1000',
      imgSrc:require('../../../static/mock/av-1.jpg'),
      data: [
        {
          name: '张三钰',
          workID: '10001',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-1.jpg')
        },
        {
          name: '王梦琪',
          workID: '10002',
          wsID: '1001',
          imgSrc:require('../../../static/mock/av-1.jpg')
        },
        {
          name: '余亦寒',
          workID: '10003',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-1.jpg')
        },
        {
          name: '李寻真',
          workID: '10004',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-3.jpg')
        },
        {
          name: '赵代真',
          workID: '10005',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-3.jpg')
        },
        {
          name: '张冷卉',
          workID: '10006',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-3.jpg')
        },
        {
          name: '钱访琴',
          workID: '10007',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-2.jpg')
        },
        {
          name: '王雁玉',
          workID: '10008',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-2.jpg')
        },
        {
          name: '丁翠柔',
          workID: '10009',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-2.jpg')
        },
        {
          name: '李千兰',
          workID: '10010',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-3.jpg')
        },
        {
          name: '任寻文',
          workID: '10011',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-1.jpg')
        },
        {
          name: '张怀蝶',
          workID: '10012',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-2.jpg')
        },
        {
          name: '邱乐菱',
          workID: '10013',
          wsID: '1000',
          imgSrc:require('../../../static/mock/av-3.jpg')
        }
      ]
    }
  },
  methods: {
    changeName (e, f, g) {
      // console.log(f)
      this.spin = true
      setTimeout(() => {
        this.spin = false
        this.name = e
        this.workID = f
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
