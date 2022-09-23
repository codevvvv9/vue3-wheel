<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gulu-dialog-overlay" @click="handleClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="title">
              <span>标题</span>
            </slot>
            <span class="gulu-dialog-close" @click="handleCloseDialog"></span>
          </header>
          <main>
            <slot name="content"> </slot>
          </main>
          <footer>
            <Button level="main" @click="handleClickOk">OK</Button>
            <Button @click="handleClickCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts" setup>
import Button from "./Button.vue";
// defineEmits() 宏不能在子函数中使用。
// 必须直接放置在 <script setup> 的顶级作用域下
// 这些顶级的宏都返回了对应值可以在子函数中使用
const emits = defineEmits(["update:visible", "cancel"]);
const props = defineProps({
  visible: {
    type: Boolean,
    require: true,
    default() {
      return false;
    },
  },
  // 是否可以点击遮罩层关闭dialog，默认不可以
  closeOnClickOverlay: {
    type: Boolean,
    required: false,
    default() {
      return false;
    },
  },
  handleOk: {
    type: Function,
    required: false,
    default() {
      return () => {};
    },
  },
  handleCancel: {
    type: Function,
    required: false,
    default() {
      return () => {};
    },
  },
});
// 慎用props的解构，会破坏响应性
// const { visible } = props;
// console.log("dialog value", props.visible);
// props的值我们尽量只get
const handleCloseDialog = () => {
  emits("update:visible", false);
};
function handleClickOverlay(params: any) {
  // 只有传递了点击遮罩层可以关才触发
  if (props.closeOnClickOverlay) {
    handleCloseDialog();
  }
}
// ok的关闭需要父组件明确的告诉可以关闭了，才能关闭
function handleClickOk(params: any) {
  if (props.handleOk?.()) {
    handleCloseDialog();
  }
}
function handleClickCancel(params: any) {
  props.handleCancel?.()
  emits("cancel", "cancel");
  handleCloseDialog();
}
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  // 使用css实现关闭的x
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
