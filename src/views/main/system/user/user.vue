<template>
  <div class="user">
    <cy-form v-bind="formCofig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cyForm from '@/base-ui/from/index'
import { formCofig } from './config/searchConfig'
export default defineComponent({
  name: 'user',
  components: { cyForm },
  setup() {
    return {
      formCofig
    }
  }
})
</script>

<style scoped></style>
