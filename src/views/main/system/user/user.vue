<template>
  <div class="user">
    <cy-form :formItems="formItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cyForm, { IFormItem } from '@/base-ui/from/index'
export default defineComponent({
  name: 'user',
  components: { cyForm },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '喜欢运动',
        placeholder: '请选择喜欢运动',
        options: [
          { label: '篮球', value: 'basketball' },
          { label: '足球', value: 'football' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '请选择开始时间',
          endPlaceholder: '请选择结束时间',
          type: 'daterange'
        }
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
