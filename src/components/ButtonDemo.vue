<template>
  <div>Button组件示例</div>
  <h1>示例1： theme属性</h1>
  <br>
  <div>
    <w-button>你好</w-button>
    <w-button theme="button">你好按钮</w-button>
    <w-button theme="link">你好链接🔗</w-button>
    <w-button theme="text">你好文字</w-button>
  </div>
  <br>
  <h1>示例2： size属性</h1>
  <br>
  <div>
    <w-button size="small">小小小</w-button>
    <w-button>普普通</w-button>
    <w-button size="big">大大大</w-button>
  </div>
  <div>
    <w-button size="small" theme="link">小小小</w-button>
    <w-button theme="link">普普通</w-button>
    <w-button size="big" theme="link">大大大</w-button>
  </div>
  <div>
    <w-button size="small" theme="text">小小小</w-button>
    <w-button theme="text">普普通</w-button>
    <w-button size="big" theme="text">大大大</w-button>
  </div>
  <br>
  <h1>示例3： level属性</h1>
  <br>
  <div>
    <w-button level="main">主要按钮</w-button>
    <w-button>普通按钮</w-button>
    <w-button level="danger">危险按钮</w-button>
  </div>
  <div>
    <w-button theme="link" level="main">主要链接按钮</w-button>
    <w-button theme="link">普通链接按钮</w-button>
    <w-button theme="link" level="danger">危险链接按钮</w-button>
  </div>
  <div>
    <w-button theme="text" level="main">主要文字按钮</w-button>
    <w-button theme="text">普通文字按钮</w-button>
    <w-button theme="text" level="danger">危险文字按钮</w-button>
  </div>
  <br>
  <h1>示例4： disabled属性</h1>
  <br>
  <div>
    <w-button :disabled="true">禁用按钮</w-button>
    <w-button theme="link" :disabled="true">禁用链接按钮</w-button>
    <w-button theme="text" :disabled="true">禁用文字按钮</w-button>
  </div>
  <br>
  <h1>示例5： loading属性</h1>
  <br>
  <div>
    <w-button :loading="true">loading按钮</w-button>
    <w-button>普通按钮</w-button>
  </div>
  <br>
  <h1>示例6： 点击事件</h1>
  <br>
  <div>
    <w-button @click="handleClick" :loading="loading">loading按钮</w-button>
  </div>
</template>

<script lang="ts" setup>
// vue3推崇的写法，直接script标签加上setup，会自动抛出去引入的组件和声明的变量函数等
//和传统的vue2写法中使用setup()入口一样，不过这种方式需要记得return 声明的变量 函数
import { ref } from 'vue';
import WButton from '../lib/Button.vue'

const loading = ref(false)
const handleClick = () => {
  loading.value = !loading.value
  setTimeout(() => {
    loading.value = !loading.value
  }, 2*1000);
}
</script>