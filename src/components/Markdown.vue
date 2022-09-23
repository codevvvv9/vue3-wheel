<!-- 该文件为md文件的渲染模板文件，也就是说只借助md文件加载到
  Markdown.vue就能渲染一个页面了 -->
<template>
  <div>
    <article class="markdown-body" v-html="mdContent"></article>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
})
const mdContent = ref(null)
const { path } = props
// 动态import 相当于这个网络请求http://127.0.0.1:5173/src/markdown/install.md?import
import(path).then((result) => {
  console.log('result is', result);
  //异步加载后的default字段是需要的字符串
  mdContent.value = result.default
})
</script>