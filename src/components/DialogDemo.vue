<template>
  <div>
    <div>
      <h1>Switch 组件示例</h1>
      <Demo :component="Dialog1" />
      <Demo :component="Dialog2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Demo from "./Demo.vue";
import Dialog1 from "./Dialog1.demo.vue";
import Dialog2 from "./Dialog2.demo.vue";
</script>
