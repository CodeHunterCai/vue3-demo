import { resolve } from 'path'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import UnoCSS from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      host: '0.0.0.0',
      open: true,
      cors: true,
      proxy: {
        '/api/safety/v1': {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_GLOB_APP_TITLE
          }
        }
      }),
      UnoCSS({
        hmrTopLevelAwait: false
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(pathSrc, 'assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `
        }
      }
    }
  }
})
