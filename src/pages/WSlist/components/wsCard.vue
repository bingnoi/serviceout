<template>
  <div class="card-container">
    <div class="upper">
      <a-avatar class="avatar" :size="60" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2764444840,3876330404&fm=26&gp=0.jpg" />
      <div class="title">车间{{id}}</div>
      <div class="info-container">
        <div class="info">到岗情况: {{num_cul}} / {{num_all}}</div>
        <div class="info">车间状态: <a-icon
                  :type="state?'check':'close'"
                  :style="state?'color: green':'color: red'"></a-icon></div>
      </div>
    </div>
    <div class="bottom">
      <a-button-group style="line-height: 50px">
        <router-link to="/site/startLog">
          <a-button type="primary" ghost style="color: black">监控现场</a-button>
        </router-link>
        <router-link to="wsInfo">
          <a-button type="primary" ghost style="color: black">车间信息</a-button>
        </router-link>
      </a-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wsCard',
  props: {
    id: String,
    state: Boolean,
    num_all: String,
    num_cul: String
  },
  data () {
    return {
      temp: 0
    }
  }
}
</script>

<style scoped>
.card-container{
  width: 30%;
  height: 180px;
  background-color: white;
  margin: 3%;
  position: relative;
  border-radius: 5px;
  border: 1px solid rgb(168, 168, 168);
}
.avatar{
  position: absolute;
  left: 20px;
  top: 20px;
}
.title{
  font-size: 30px;
  margin: 10px;
}
.bottom{
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
  border-top: 2px solid rgb(168, 168, 168)
}
.info-container{
  position: absolute;
  right: 40px;
}
.info{
  text-align: left
}
</style>
