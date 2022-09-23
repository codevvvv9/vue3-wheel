<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <h1>示例1：</h1>
    <Button @click="handleOpenDialog">打开Dialog</Button>
    <Dialog 
      v-model:visible="dialogVisible"
      :closeOnClickOverlay="closeOverlay"
      :handleOk="handleOk"
      :handleCancel="handleCancel"
      @cancel="cancel">
      <template v-slot:title>
        <strong>啊呀</strong>
      </template>
      <template v-slot:content>
        <h1>我是h1</h1>
        <h1>我是h2</h1>
      </template>
    </Dialog>
    <h1>示例2：</h1>
    <Button @click="handleOpenDialog2">一键打开dialog</Button>
  </div>
</template>

<script lang="ts" setup>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { h, ref } from 'vue';
import { openDialog } from '../lib/openDialog';

const dialogVisible = ref(false)
const handleOpenDialog = () => {
  dialogVisible.value = !dialogVisible.value
}
const closeOverlay = ref(false)
const handleOk = () => {
  
  return true
}
const handleCancel = () => {

}

function cancel(params:any) {
  console.log('params is', params);
  
}

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