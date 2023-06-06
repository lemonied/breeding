import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          require('autoprefixer'),
        ],
      },
    },
    server: {
      proxy: {
        '/ngapi': {
          target: 'http://106.12.145.25/',
          changeOrigin: true,
          secure: false,
        },
        '/__local': {
          target: 'http://106.12.145.25/',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
