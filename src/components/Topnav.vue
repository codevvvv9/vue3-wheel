<template>
  <div class="topnav">
    <div class="asideFoldButton" @click="toggleMenuVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanzhankai"></use>
      </svg>
    </div>
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  .asideFoldButton {
    cursor: pointer;
    margin-right: 10px;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    // 移动端时水平居中
    .logo {
      margin: 0 auto;
    }
  }
}

</style>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
  name: 'Topnav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenuVisible = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value
      }
    }

    return { toggleMenuVisible }
  }
}
</script>