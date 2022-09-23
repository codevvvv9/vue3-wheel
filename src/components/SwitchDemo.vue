<template>
  <!-- vue3的v-model相当于value的props和原来的@input事件的集成的语法糖，直接一个新指令完成-->
  <!-- <Switch v-model:value="checked"></Switch> -->
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>{{ Switch1.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <!-- <Switch1></Switch1> -->
        <component :is="Switch1" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switch1.__sourceCode}}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>{{ Switch2.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <!-- <Switch2></Switch2> -->
        <component :is="Switch2" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switch2.__sourceCode}}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Switch1 from './Switch1.demo.vue'
import Button from "../lib/Button.vue";
import Switch2 from './Switch2.demo.vue';
console.log('S', Switch2.__sourceCode);

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
