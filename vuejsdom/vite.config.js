import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'


const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  css: {
    preprocessorOptions: {
    }
 
  },
  plugins: [
      vue(),
      Components({
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
  
  ],
  build: {
        minify : false
  },
  server :{
        host:true
  }

})


