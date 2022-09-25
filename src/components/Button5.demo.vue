<demo>
  loading属性
</demo>
<template>
  <div>
    <w-button :loading="true">loading按钮</w-button>
    <w-button>普通按钮</w-button>
  </div>
</template>

<script lang="ts" setup>
import { Button as WButton } from "../lib/index";
</script>
