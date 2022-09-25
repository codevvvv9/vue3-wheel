<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Button1"/>
    <Demo :component="Button2"/>
    <Demo :component="Button3"/>
    <Demo :component="Button4"/>
    <Demo :component="Button5"/>
    <Demo :component="Button6"/>
  </div>
</template>

<script lang="ts" setup>
// vue3推崇的写法，直接script标签加上setup，会自动抛出去引入的组件和声明的变量函数等
//和传统的vue2写法中使用setup()入口一样，不过这种方式需要记得return 声明的变量 函数
import Demo from './Demo.vue'
import Button1 from './Button1.demo.vue'
import Button2 from './Button2.demo.vue'
import Button3 from './Button3.demo.vue'
import Button4 from './Button4.demo.vue'
import Button5 from './Button5.demo.vue'
import Button6 from './Button6.demo.vue'
</script>