<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="checked" disabled />
</template>

<script lang="ts" setup>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const checked = ref(false);
</script>
