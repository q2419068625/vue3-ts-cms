<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登录">
        <template #label>
          <span>
            <el-icon> <i-user-filled /> </el-icon>
            账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span>
            <el-icon> <i-iphone /> </el-icon>
            手机登录
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="wrapper">
      <el-checkbox v-model="isChecked" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="btn" type="primary" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isChecked = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const handleLoginClick = () => {
      accountRef.value?.loginAccount(isChecked.value)
    }
    return {
      isChecked,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="scss" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 120px;
  .title {
    text-align: center;
  }
  .wrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    width: 100%;
  }
}
</style>
