import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  entry: {
    app: './src/app.js',
    polyfill: './src/polyfill.js'
  },
  plugins: [react()],
})
