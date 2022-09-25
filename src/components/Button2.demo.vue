<demo>
  size属性
</demo>
<template>
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
</template>

<script lang="ts" setup>
import { Button as WButton } from "../lib/index";
</script>
