<template>
  <div>Tabs示例： </div>
  <h1>示例1：</h1>
  <Tabs v-model:selected="selected">
    <Tab title="标题1">内容1</Tab>
    <Tab title="标题222">内容2</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
const selected = ref<string>("标题222")
</script>