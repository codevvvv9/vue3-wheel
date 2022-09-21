<template>
  <div>
    <button>
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Switch'
}
</script>
<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: calc($h * 2);
    border: none;
    background: blue;
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
    }
    &:hover > span {
      left: calc(100% - #{$h2} - 2px);
      cursor: pointer;
    }
  }
</style>