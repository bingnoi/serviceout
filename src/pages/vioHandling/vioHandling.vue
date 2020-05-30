<template>
  <div style="display: flex">

    <div class="des-container" :bordered="true">
      <a-descriptions title="基本信息" :column="1" :bordered="true">
        <a-descriptions-item label="事件ID:">
          {{this.$route.params.eventID}}
        </a-descriptions-item>
        <a-descriptions-item label="发生时间">
          {{this.$route.params.time}}
        </a-descriptions-item>
          <a-descriptions-item label="车间ID">
            1000
          </a-descriptions-item>
        <a-descriptions-item label="处理人员">
          王五
        </a-descriptions-item>
        <a-descriptions-item label="截图">
          <img src="/api/test1.png" alt="no data yet" style="height: 200px">
        </a-descriptions-item>
      </a-descriptions>
    </div>

    <div style="margin: 20px; margin-left: 60px;">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }" @submit="handleSubmit">
        <a-form-item label="违规人员id:">
          <a-input
            v-decorator="['note', { rules: [{ required: true, message: '请输入对应违规人员id!' }] }]"
          />
        </a-form-item>
        <a-form-item label="wow">
          <a-input
            v-decorator="['wow', { rules: [{ required: true, message: '请输入对应违规人员id!' }] }]"
          />
        </a-form-item>
        <a-form-item label="处理状态">
          <a-select
            v-decorator="[
              'done',
              { rules: [{ required: true, message: '请填入处理状态' }] },
            ]"
            placeholder="事件当前处理状态"
          >
            <a-select-option value="processing">
              正在处理
            </a-select-option>
            <a-select-option value="female">
              已处理
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vioHandling',

  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          alert('提交成功')
          this.$router.push('/vioManage')
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    goBack () {
      // alert('提交成功')
      // this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.des-container{
  background-color: white;
  padding: 10px;
  width: 50%;
  margin: 20px 10px;
  text-align: left
}
</style>
