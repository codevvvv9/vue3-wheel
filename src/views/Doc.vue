<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>
  
<template>
  <div class="topnav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside>侧边栏</aside>
    <main>主内容</main>
  </div>
</template>
  
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
  