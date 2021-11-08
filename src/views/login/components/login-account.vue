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
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const state = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // InstanceType 获取构造函数类型的实例类型。
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccount = (isChecked: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否记住密码
          if (isChecked) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
          state.dispatch('login/accountLogin', { ...account })
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
