import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Tabs from './components/Tabs.vue'
import DocDefault from './components/DocDefault.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'
import GetStarted from './markdown/get-started.md'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import Markdown from './components/Markdown.vue'

const getMd = (md: string) => {
  // h函数 返回一个处理后的VNode
  // 一定记得加key，不然切换路由，页面没变
  return h(Markdown, {mdContent: md, key: md})
}
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: DocDefault,
        },
        {
          path: 'switch',
          component: SwitchDemo,
        },
        {
          path: 'button',
          component: ButtonDemo,
        },
        {
          path: 'dialog',
          component: DialogDemo,
        },
        {
          path: 'tabs',
          component: Tabs,
        },
        {
          path: 'intro',
          component: getMd(intro),
        },
        {
          path: 'install',
          component: getMd(install),
        },
        {
          path: 'get-started',
          component: getMd(GetStarted),
        },
      ]
    }
  ]
})

export {
  router
}