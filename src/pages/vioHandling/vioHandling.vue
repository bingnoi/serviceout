<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <div>基础信息:</div>
      <a-form-item label="违规人员id:">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: '请输入对应违规人员id!' }] }]"
        />
      </a-form-item>
      <a-form-item label="wow">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: '请输入对应违规人员id!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender">
        <a-select
          v-decorator="[
            'gender',
            { rules: [{ required: true, message: 'Please select your gender!' }] },
          ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            male
          </a-select-option>
          <a-select-option value="female">
            female
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button @click="goBack" type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
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
          console.log('Received values of form: ', values)
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
      alert('提交成功')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
