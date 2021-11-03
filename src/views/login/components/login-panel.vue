<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登录">
        <template #label>
          <span>
            <el-icon> <i-user-filled /> </el-icon>
            账号登录
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span>
            <el-icon> <i-iphone /> </el-icon>
            手机登录
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.login-panel {
  text-align: center;
  width: 320px;
}
</style>
