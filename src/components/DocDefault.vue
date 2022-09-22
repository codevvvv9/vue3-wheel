<template>
  <div class="gulu-doc-default">
    <h2>👏🏻 欢迎来到吴少林的vue3 UI库</h2>
    <p>这是使用vue3+ts实现的UI库，包含几个常用的组件</p>
    <br>
    <p>举几个🌰</p>
    <ul>
      <li>Button组件</li>
      <li>Switch组件</li>
      <li>Dialog组件</li>
      <li>Tabs组件</li>
    </ul>
  </div>
</template>

<script lang="ts">

export default {
  name: 'DocDefault',
}
</script>
<style lang="scss" scoped>
  .gulu-doc-default {
    > ul {
      > li {
        margin-top: 10px;
      }
    }
  }
</style>