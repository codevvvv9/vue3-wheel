import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
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
          component: Switch,
        },
        {
          path: 'button',
          component: Button,
        },
        {
          path: 'dialog',
          component: Dialog,
        },
        {
          path: 'tabs',
          component: Tabs,
        },
      ]
    }
  ]
})

export {
  router
}