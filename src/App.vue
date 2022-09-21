<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import { getClientWidth } from './utils/index'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    const width = getClientWidth()
    const menuVisible = ref(width > 500 ? true : false)
    provide('menuVisible', menuVisible) // set

    //路由发生改变后，移动端需要隐藏menu
    router.afterEach((to, from, failure) => {
      if (menuVisible && width < 500) {

        menuVisible.value = false
      }
    })
  }
}
</script>
<style scoped>

</style>
