<template>
  <div class="card-container"
  >
    <div class="upper">
      <a-avatar class="avatar" :size="60" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2764444840,3876330404&fm=26&gp=0.jpg" />
      <div>
        <div class="title">车间{{id}}</div>
        <div class="info-container">
          <div class="info">车间主任: {{manager}}</div>
          <div class="info">到岗情况: {{num_cul}} / {{num_all}}</div>
          <div class="info">车间状态: <a-icon
                    :type="state?'check':'close'"
                    :style="state?'color: green':'color: red'"></a-icon></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <router-link class="bottom-item" to="/site/startLog">
        <div>车间现场</div>
      </router-link>
      <div class="divider"></div>
      <router-link class="bottom-item" to="/wsinfo">
        <div>详细信息</div>
      </router-link>
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
    num_cul: String,
    manager: String
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
  width: 29%;
  height: 180px;
  background-color: white;
  margin: 2%;
  position: relative;
  border-radius: 5px;
}
.avatar{
  position: absolute;
  left: 20px;
  top: 20px;
}
.title{
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
}
.bottom{
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
  border-top: 2px solid rgb(182, 218, 255);
  display: flex;
  justify-content: space-around;
  flex-direction: row
}
.divider{
  width: 1px;
  height: 48px;
  border: 1.5px solid rgb(182, 218, 255)
}
.bottom-item{
  width: 50%;
  line-height: 50px;
  font-size: 17px;
  color: black;
  transition:all 0.3s;
}
.bottom-item:hover{
  background-color: rgb(118, 187, 255);
  color: white
}
.info-container{
  text-align: left;
  position: relative;
  left: 35%;
}
</style>
