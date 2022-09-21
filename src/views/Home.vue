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
  <div class="banner">
    <h1>vue3 UI框架</h1>
    <h2>一个厉害的UI框架</h2>
    <p class="action">
      <a href="">Github</a>
      <a href="">开始</a>
    </p>
  </div>
</template>
  
<style scoped lang="scss">

</style>
  