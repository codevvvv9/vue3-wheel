<template>
  <div class="topnavAndBanner">
    <Topnav></Topnav>
    <div class="banner">
      <h1>vue3 UI框架</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/codevvvv9/vue3-wheel">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="gulu-features">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lightbulb-idea"></use>
        </svg>
        <div>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </li>
    </ul>

  </div>
</template>
  
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  //下面这两种写法也能实现两边锁起来的效果
  // border-bottom-left-radius: 200px 30px;
  // border-bottom-right-radius: 200px 30px;
  clip-path: ellipse(80% 60% at 50% 40%);
}

.gulu-features {
  margin: 60px auto;
  // width: 400px;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;

    >ul {
      >li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      // width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  padding: 100px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0px;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>