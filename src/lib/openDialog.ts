import { createApp, h, VNode } from 'vue'
import Dialog from './Dialog.vue'
type dialogOptions = {
  title?: () => VNode | String,
  content?: () => VNode | String,
  closeOnClickOverlay?: Boolean,
  handleOk?: () => void,
  handleCancel?: () => void,
}

function close(app: any, div: HTMLElement) {
  app.unmount(div)
  div.remove()
}

function openDialog(options: dialogOptions) {
  const { title, content, closeOnClickOverlay, handleOk, handleCancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    // render为内置函数，来构建组件
    // h()函数接受三个参数， 返回VNode
    // 第一个组件 第二个props 第三个slots
    render() {
      return h(Dialog, {
        closeOnClickOverlay,
        visible: true,
        handleOk,
        handleCancel,
        'onUpdate:visible': (visible: boolean) => {
          if (!visible) {
            close(app, div)
          }
        }
      }, {
        title,
        content,
      })
    }
  })
  app.mount(div)
}

export {
  openDialog
}