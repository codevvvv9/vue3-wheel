<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="handleHideCode" v-if="demoCodeVisible">隐藏代码</Button>
      <Button @click="handleViewCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="demoCodeVisible">
      <pre class="language-html" v-html="demoCodeHtml" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
import 'prismjs';
// node_modules 的prismjs/themes/ 目录的css可以切换不同代码主题
import 'prismjs/themes/prism-okaidia.css'
import { computed, ref } from "vue";
//构造一个对象
const Prism = (window as any).Prism
const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});
const demoCodeVisible = ref(false)
const handleViewCode = () => {
  demoCodeVisible.value = true
}
const handleHideCode = () => {
  demoCodeVisible.value = false
}
const { component } = props
const demoCodeHtml = computed(() => {
  return Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
})
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
