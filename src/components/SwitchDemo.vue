<template>
  <!-- vue3的v-model相当于value的props和原来的@input事件的集成的语法糖，直接一个新指令完成-->
  <Switch v-model:value="checked"></Switch>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  name: 'SwitchDemo',
  components: {
    Switch,
  },
  setup(props: any) {
    const handleInput = ($event: any) => {
      //收到子组件内部消息后，才能由父组件修改数据
      //进而子组件收到数据变化，进行UI状态变更
      checked.value = $event
    }
    //组件的默认值
    let checked = ref(true)
    return {
      checked,
      handleInput,
    }
  }
}
</script>