<demo>
  点击事件
</demo>
<template>
  <div>
    <w-button @click="handleClick" :loading="loading">loading按钮</w-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Button as WButton } from "../lib/index";
const loading = ref(false)
const handleClick = () => {
  loading.value = !loading.value
  setTimeout(() => {
    loading.value = !loading.value
  }, 2*1000);
}
</script>
