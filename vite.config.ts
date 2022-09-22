import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import markdown from './plugins/index'
// import { plugin, Mode } from 'vite-plugin-markdown'
import { md } from './plugins/md-vite3'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // markdown(),
    // plugin({mode: [Mode.HTML, Mode.VUE]}),
    md()
  ],
  base: './'
})
