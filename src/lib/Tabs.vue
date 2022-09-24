<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="guluNav">
      <div
        class="gulu-tabs-nav-item"
        v-for="(title, index) in titleList"
        :key="index"
        @click="handleClickTab(title)"
        :class="{ selected: title === selected }"
        :ref="el => { if(title === selected) itemRefs = (el as Element)}"
      >
        {{ title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="guluIndicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <div class="gulu-tabs-content-item">
        <component :is="current" :key="current.props.title" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, Ref, ref, useSlots, watchEffect } from "vue";
import Tab from "./Tab.vue";

const itemRefs: Ref<Element | null> = ref(null);
const guluNav: Ref<HTMLElement | null> = ref(null);
const guluIndicator: Ref<HTMLElement | null> = ref(null);

//你只可以在组件挂载后才能访问模板引用
onMounted(() => {
  watchEffect(() => {
    const width = itemRefs.value?.getBoundingClientRect().width
    const containerLeft = itemRefs.value?.getBoundingClientRect().left
    const navLeft = guluNav.value?.getBoundingClientRect().left
    if (guluIndicator.value && navLeft && containerLeft) {
      guluIndicator.value.style.width = width + 'px'
      guluIndicator.value.style.left = (containerLeft - navLeft) + 'px'
    }

  });
});
// useSlots 和 useAttrs 是真实的运行时函数，
// 它的返回与 setupContext.slots 和 setupContext.attrs 等价。它们同样也能在普通的组合式 API 中使用。
const slots: any = useSlots();
const components = slots.default();

const titleList = components.map((component: any) => {
  if (component.type !== Tab) {
    throw new Error("传入类型不对");
  }
  return component.props.title;
});
const current = computed(() => {
  return components.filter(
    (component: any) => component.props.title === props.selected
  )[0];
});
const props = defineProps({
  selected: {
    type: String,
    required: true,
    default() {
      // return titleList[0]
      return "";
    },
  },
});
const emits = defineEmits(["update:selected"]);
function handleClickTab(title: string) {
  emits("update:selected", title);
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
