<demo>
  disabled属性
</demo>
<template>
  <div>
    <w-button :disabled="true">禁用按钮</w-button>
    <w-button theme="link" :disabled="true">禁用链接按钮</w-button>
    <w-button theme="text" :disabled="true">禁用文字按钮</w-button>
  </div>
</template>

<script lang="ts" setup>
import { Button as WButton } from "../lib/index";
</script>
