import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve' || 'dev') {
    console.log('Running in dev mode')
    return {
      plugins: [react(), Inspect()],
      server: {
        port: 3000,
        // open: '/menulist',
        cors: true,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@routes': path.resolve(__dirname, './src/routes'),
          '@hooks': path.resolve(__dirname, './src/hooks'),
          '@context': path.resolve(__dirname, './src/context'),
        },
      }}}
   else {
    console.log('Running in build mode')
   }
})
