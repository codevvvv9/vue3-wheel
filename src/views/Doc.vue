<template>
  <div class="layout">
    <Topnav class="nav" :toggleVisible="true"></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return { menuVisible }
  }
}
</script>
<style lang="scss" scoped>
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 76px;
    padding-left: 160px;
    @media (max-width: 500px) {
      padding-left: 0px;
    }
    aside {
      flex-shrink: 0;
      background: lightblue;
      width: 150px;
      padding: 16px 0px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      padding-top: 70px;
      z-index: $aside-index;
      >h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }
    
      >ol {
        >li {
          > a {
            display: block;
            width: 100%;
            padding: 4px 16px;
            text-decoration: none;
          }
          .router-link-active.router-link-exact-active {
            background: white;
          }
        }
      }
    }

    main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
}
</style>
  