<demo>
  默认Tabs展示
</demo>
<template>
  <div>
    <Tabs v-model:selected="selected">
      <Tab title="标题1">内容1</Tab>
      <Tab title="标题222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
const selected = ref<string>("标题222");
</script>
