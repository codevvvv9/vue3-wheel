<demo>
  level属性
</demo>
<template>
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
</template>

<script lang="ts" setup>
import { Button as WButton } from "../lib/index";
</script>
