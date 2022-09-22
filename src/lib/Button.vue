<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
// vue3推崇的写法，直接script标签加上setup，会自动抛出去引入的组件和声明的变量函数等
//和传统的vue2写法中使用setup()入口一样，不过这种方式需要记得return 声明的变量 函数

import { computed } from 'vue';

//计算属性
const classes = computed(() => {
  const { theme, size, level } = props
  let classesGetter = {
    [`gulu-theme-${theme}`]: theme,
    [`gulu-size-${size}`]: size,
    [`gulu-level-${level}`]: level,
  }
  return classesGetter
})

// 简单写法defineProps<{ theme: string }>
// 复杂写法如下
const props = defineProps({
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
  size: {
    type: String,
    required: false,
    default() {
      return 'normal'
    },
    validator(value: string) {
      // The value must match one of these strings
      return ['normal', 'big', 'small'].includes(value)
    }
  },
  level: {
    type: String,
    required: false,
    default() {
      return 'normal'
    },
    validator(value: string) {
      // The value must match one of these strings
      return ['normal', 'main', 'danger'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    required: false,
    default() {
      return false
    },
  }
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
$red: red;
$grey: gray;
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
  transition: background 250ms;
  background: white;
  color: $color;
  white-space: nowrap;

  &+& {
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

  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $color;

    &:hover,
    &:focus {
      color: lighten($color: $blue, $amount: 10%)
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken($color: white, $amount: 5%)
    }
  }
  // size样式
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }

  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  //level 样式
  &.gulu-theme-button {
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.gulu-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  // disabled属性
  &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

}
</style>