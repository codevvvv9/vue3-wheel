<template>
  <w-button
    @click="handleClick"
    @focus="handleClick"
    @mouseenter="handleClick"
    :size="size"
  >你好
  </w-button>
</template>

<script lang="ts" setup>
// vue3推崇的写法，直接script标签加上setup，会自动抛出去引入的组件和声明的变量函数等
//和传统的vue2写法中使用setup()入口一样，不过这种方式需要记得return 声明的变量 函数
import WButton from '../lib/Button.vue'
const handleClick = () => {
  console.log('hi')
}
const size = 'big'
</script>