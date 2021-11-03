<template>
  <div>
    <el-form
      ref="formRef"
      :model="account"
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccount = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录逻辑')
        }
      })
    }
    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped></style>
