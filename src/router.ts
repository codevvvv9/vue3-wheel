import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import DocDefault from './components/DocDefault.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

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
          component: Dialog,
        },
        {
          path: 'tabs',
          component: Tabs,
        },
        {
          path: 'intro',
          component: Intro,
        },
        {
          path: 'install',
          component: Install,
        },
        {
          path: 'get-started',
          component: GetStarted,
        },
      ]
    }
  ]
})

export {
  router
}