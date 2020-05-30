<template>
  <div>
    <div class="info-container">
      <a-avatar :size="100" :src="String(img)" />
      <div class="info-item">
        <div class="info">姓名: {{name}}</div>
        <!-- <div class="info">ID: {{workID}}</div> -->
        <div class="info">车间ID: {{wsID}}</div>
      </div>
    </div>
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <div slot="description">
            <span class="des-item">{{item.type}}</span>
            <span class="des-item">具体时间: {{item.time}}</span>
          </div>
          <div slot="title">{{ item.title }}</div>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "info",
  props: {
    name: String,
    workID: String,
    wsID: String,
    img:String
  },
  data() {
    return {
      data: [
        {
          title: "2020.5.24",
          type: "上班",
          time: "07:00"
        },
        {
          title: "2020.5.24",
          type: "下班",
          time: "18:00"
        },
        {
          title: "2020.5.23",
          type: "上班",
          time: "07:00"
        },
        {
          title: "2020.5.23",
          type: "下班",
          time: "18:00"
        },
        {
          title: "2020.5.22",
          type: "上班",
          time: "07:00"
        },
        {
          title: "2020.5.22",
          type: "下班",
          time: "18:00"
        }
      ]
    };
  }
};
</script>

<style scoped>
.info-container {
  margin: 20px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
}
.info {
  font-size: 17px;
  margin: 10px;
  margin-left: 50px;
}
.des-item {
  margin-right: 10px;
}
</style>
