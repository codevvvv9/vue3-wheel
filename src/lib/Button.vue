<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useAttrs } from 'vue';

// 简单写法defineProps<{ theme: string }>
// 复杂写法如下
defineProps({
  theme: {
    type: String,
    required: false,
    default() {
      return 'button'
    }
  },
})

/**
 * 为了避免vue中父组件属性自动集成到子组件最外层元素上
 * 取消默认继承inheritAttrs: false，只能结合使用普通script 
 * 有两种方式：
 * 1. useAttrs() 等价于setup(props, context)中
 * 使用context.attrs
 * 2. 直接在模版上需要绑定的元素上，绑定v-bind="$attrs"
 * 需要拆开属性绑定到不同元素上就要解构attrs
 */
console.log('useAttrs() is', useAttrs());

const {size, ...rest} = useAttrs()
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>