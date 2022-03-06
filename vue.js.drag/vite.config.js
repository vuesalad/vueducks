import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, 'src')


// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
      '@dnd/': `${pathSrc}/addon/dnd/`
    },
  },

  plugins: [vue()],
  build: {
    minify : false
},
server :{
    host:true,
    port: 3001
}
})
