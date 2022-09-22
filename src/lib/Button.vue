<template>
  <div>
    <button class="gulu-button" :class="`gulu-theme-${theme}`">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>

// 简单写法defineProps<{ theme: string }>
// 复杂写法如下
defineProps({
  theme: {
    type: String,
    required: false,
    default() {
      return 'button'
    },
    validator(value: string) {
      // The value must match one of these strings
      return ['button', 'link', 'text'].includes(value)
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
// console.log('useAttrs() is', useAttrs());

// const {size, ...rest} = useAttrs()
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .gulu-button {
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-sizing: border-box;
    height: $h;
    box-shadow: 0 1px 0 fade-out($color: #000000, $amount: .95);
    background: white;
    color: $color;
    white-space: nowrap;
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
  }
</style>