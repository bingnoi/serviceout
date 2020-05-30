<template>
  <div>
    <a-row>
      <div class="list-container">
        <a-page-header title="车间1" sub-title="车间1基础信息" @back="() => $router.go(-1)">
          <template slot="tags">
            <a-tag color="blue">Running</a-tag>
          </template>
          <template slot="extra">
            <a-button key="3">修改信息</a-button>
            <a-button key="2">联系后台</a-button>
          </template>
          <a-row type="flex">
            <a-statistic title="Status" value="正常" />
            <a-statistic
              title="车间主任"
              value="李菲菲"
              :style="{
            margin: '0 32px',
          }"
            />
            <a-statistic title="电话" value="12344534567" />
          </a-row>
        </a-page-header>
      </div>
    </a-row>
    <a-divider />
    <div class="list-container">
      <a-card
        v-for="item in vioList"
        :key="item.id"
        :title="'开工检查' + item.id"
        style="width: 80%;margin: 10px auto"
      >
        <div>
          <span style="margin-right: 50px">
            <b>安全员：</b>
            {{item.wsID}}
          </span>
          <span style="margin-right: 50px">
            <b>检查时间:</b>
            {{item.time}}
          </span>
          <span style="margin-right: 50px">
            <b>检查情况:</b>
            {{item.state}}
          </span>
          <span style="margin-right: 50px">
            <b>开工备注:</b>
            {{item.mark}}
          </span>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "safetyLog",
  data() {
    return {
      vioList: [
        {
          id: "001",
          time: "2020.5.29 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "002",
          time: "2020.5.28 12:00",
          wsID: "王飞",
          state: "禁止开工",
          mark:"机器温度过高"
        },
        {
          id: "003",
          time: "2020.5.27 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "004",
          time: "2020.5.26 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "005",
          time: "2020.5.25 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "006",
          time: "2020.5.24 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "007",
          time: "2020.5.23 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "008",
          time: "2020.5.22 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        },
        {
          id: "009",
          time: "2020.5.21 12:00",
          wsID: "王飞",
          state: "可以开工",
          mark:"良好"
        }
      ]
    };
  }
};
</script>

<style scoped>
.list-container {
  width: 95%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 0 auto;
}
</style>
