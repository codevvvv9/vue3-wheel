<demo>
  常规用法
</demo>
<template>
  <Switch v-model:value="checked"></Switch>
</template>

<script lang="ts" setup>
import { Switch } from "../lib/index";
import { ref } from "vue";
const checked = ref(true);
</script>
