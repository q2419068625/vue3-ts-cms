<template>
  <div>
    <el-form ref="ruleForm" :model="account" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="account.code" class="input_class"></el-input>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })
    return {
      account
    }
  }
})
</script>

<style scoped>
.input_class {
  width: 110px;
  margin-right: 10px;
}
</style>
