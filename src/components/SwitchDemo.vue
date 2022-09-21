<template>
  <Switch :value="checked" @input="handleInput"></Switch>
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