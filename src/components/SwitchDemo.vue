<template>
  <!-- vue3的v-model相当于value的props和原来的@input事件的集成的语法糖，直接一个新指令完成-->
  <!-- <Switch v-model:value="checked"></Switch> -->
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </div>
</template>

<script lang="ts" setup>
import Demo from './Demo.vue'
import SwitchDemo1 from './Switch1.demo.vue'
import SwitchDemo2 from './Switch2.demo.vue'
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
