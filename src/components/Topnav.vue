<template>
  <div class="topnav">
    <div class="asideFoldButton" @click="toggleMenuVisible" v-if="toggleVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanzhankai"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/">
        <svg class="icon logo" aria-hidden="true">
          <use xlink:href="#icon-haixing"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  .asideFoldButton {
    cursor: pointer;
    margin-right: 10px;
    display: none;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg.logo {
      width: 32px;
      height: 32px;
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
  props: {
    toggleVisible: {
      type: Boolean,
      required: false,
      default() {
        return false
      }
    }
  },
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