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
  mdContent: {
    type: String,
    required: true,
  },
})
</script>