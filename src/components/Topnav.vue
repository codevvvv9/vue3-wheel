<template>
  <div class="topnav">
    <div class="asideFoldButton" @click="toggleMenuVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanzhankai"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/">
        <svg class="icon logo" aria-hidden="true">
          <use xlink:href="#icon-icon-"></use>
        </svg>
      </router-link>
    </div>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .asideFoldButton {
    cursor: pointer;
    margin-right: 10px;
    display: none;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg.logo {
      width: 2em;
      height: 2em;
    }
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
    .asideFoldButton {
      display: block;
    }
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