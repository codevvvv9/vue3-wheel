<demo>
  默认dialog
</demo>
<template>
  <div>
    <Button @click="handleOpenDialog">打开Dialog</Button>
    <Dialog
      v-model:visible="dialogVisible"
      :closeOnClickOverlay="closeOverlay"
      :handleOk="handleOk"
      :handleCancel="handleCancel"
      @cancel="cancel"
    >
      <template v-slot:title>
        <strong>啊呀</strong>
      </template>
      <template v-slot:content>
        <h1>我是h1</h1>
        <h1>我是h2</h1>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'

const dialogVisible = ref(false);
const handleOpenDialog = () => {
  dialogVisible.value = !dialogVisible.value;
};
const closeOverlay = ref(false);
const handleOk = () => {
  return true;
};
const handleCancel = () => {};

function cancel(params: any) {
  console.log("params is", params);
}
</script>
