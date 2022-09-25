<demo>
  一键打开dialog
</demo>
<template>
  <div>
    <Button @click="handleOpenDialog2">一键打开dialog</Button>
  </div>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { openDialog } from "../lib";
import Button from '../lib/Button.vue'

function handleOpenDialog2(params: Object) {
  openDialog({
    // 插槽最好通过函数的返回值来实现
    title: () => h('strong', {}, '我是标题呀'),
    content: () => h('p', {}, '我是第一行'),
    closeOnClickOverlay: true,
    handleOk() {
      console.log('ok');
    },
    handleCancel() {
      console.log('cancel');
    }
  })
}
</script>
