<template>
  <!-- vue3的v-model相当于value的props和原来的@input事件的集成的语法糖，直接一个新指令完成-->
  <!-- <Switch v-model:value="checked"></Switch> -->
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="checked"></Switch>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="checked" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <Switch v-model:value="checked2" disabled />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="checked" disabled /&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
export default {
  name: "SwitchDemo",
  components: {
    Switch,
    Button,
  },
  setup(props: any) {
    const checked2 = ref(false)
    const handleInput = ($event: any) => {
      //收到子组件内部消息$event后，才能由父组件修改数据
      //进而子组件收到数据变化，进行UI状态变更
      checked.value = $event;
    };
    //组件的默认值
    let checked = ref(true);
    return {
      checked,
      handleInput,
      checked2
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
