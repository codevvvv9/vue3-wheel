import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 解析md文件的插件
import { md } from './plugins/md-vite3'
// 解析源代码的插件
import { demo } from './plugins/demo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    demo(),
    md(),
  ],
  base: './'
})
