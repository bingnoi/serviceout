<template>
  <div style="width: 90%; background-color: white; padding : 30px">
    <div class="form-container">
      <h2 style="margin: 40px;">生成开工日志</h2>
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="handleSubmit">
        <a-form-model-item label="当前车间">
          <div>
            车间1
          </div>
        </a-form-model-item>
        <a-form-model-item label="今日日期">
          <div>
            {{date}}
          </div>
        </a-form-model-item>
        <a-form-model-item label="卫生情况">
          <a-switch v-model="form.clean" />
        </a-form-model-item>
        <a-form-model-item label="机器状态">
          <a-switch v-model="form.machine" />
        </a-form-model-item>
        <a-form-model-item label="能否开工">
          <a-switch v-model="form.work" />
        </a-form-model-item>
        <a-form-model-item label="开工备注">
          <a-input v-model="form.desc" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary"  html-type="submit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;" @click="onCancel">
            Cancel
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: 'startLog',
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        clean: false,
        machine: false,
        work: false,
        desc: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      alert('保存成功!')
      this.$router.push('/site/wslist')
    },
    onSubmit () {
      console.log('submit!', this.form)
      alert('提交成功!')
    },
    onCancel () {
      this.form.clean = false
      this.form.machine = false
      this.form.work = false
      this.form.desc = ''
    }
  },
  computed: {
    date () {
      let year = new Date().getFullYear()
      let month = new Date().getMonth() + 1
      let day = new Date().getDate()
      return '' + year + '.' + month + '.' + day
    }
  }
}
</script>

<style scoped>
.form-container{
  width: 70%;
  margin: 0px auto;
}
</style>
