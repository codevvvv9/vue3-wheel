<template>
  <div>
    <button class="gulu-switch" :class="{'gulu-checked': value}" @click="toggleSwitch" :disabled="disabled">
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">

export default {
  name: 'Switch',
  props: {
    // 组件的真实数据
    value: {
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  setup(props: any, context: { emit: (arg0: string, arg1: any) => void; }) {
    const toggleSwitch = () => {
      //使用prop时不能修改它，只能取反，抛给父级去修改对应值
      let checked = props.value
      //组件内触发切换操作后，通知外部 
      // context.emit('input', !checked)
      // vue3的v-model 规定emit的时间名字必须是update:propsName
      context.emit('update:value', !checked)
    }
    return {
      toggleSwitch,
    }
  }
}
</script>
<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .gulu-switch {
    height: $h;
    width: calc($h * 2);
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
    background: #bfbfbf;
    border-radius: calc($h / 2);
    position: relative;
    &[disabled] {
      cursor: not-allowed;
    }
    &[disabled]:hover {
      cursor: not-allowed;
    }
    span {
      position: absolute; //会导致span变成block
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      border-radius: calc($h2 / 2);
      background: white;
      transition: all 300ms;
    }
    &:hover {
      cursor: pointer;
    }
    &.gulu-checked {
      background: #1890ff;
    }
    &.gulu-checked > span {
      left: calc(100% - #{$h2} - 2px);
    }
    // 激活时有个小的拉伸
    &:active{
      > span {
        width: $h2 + 4px;
      }
    }
    &.gulu-checked:active{
      > span {
        width: $h2 + 4px; 
        margin-left: -4px;
      }
    }
  }
</style>