<template>
  <div>
    <button :class="{checked: checked}" @click="toggleSwitch">
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">
import { Ref, ref } from 'vue';

export default {
  name: 'Switch',
  setup(props: any, context: { commit: (arg0: string, arg1: Ref<boolean>) => void; }) {
    const checked = ref(false)
    const toggleSwitch = () => {
      checked.value = !checked.value
    }
    // context.commit('update:value', checked)
    return {
      checked,
      toggleSwitch,
    }
  }
}
</script>
<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: calc($h * 2);
    border: none;
    &:focus {
      outline: none;
    }
    background: gray;
    border-radius: calc($h / 2);
    position: relative;
    span {
      position: absolute; //会导致span变成block
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      border-radius: calc($h2 / 2);
      background: white;
      transition: left 300ms;
    }
    &:hover {
      cursor: pointer;
    }
    &.checked {
      background: blue;
    }
    &.checked > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
</style>