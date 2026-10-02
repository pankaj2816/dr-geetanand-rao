import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const dist = path.resolve(__dirname, 'dist')
        const indexHtml = path.join(dist, 'index.html')
        const notFoundHtml = path.join(dist, '404.html')
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml)
        }
      },
    },
  ],
  base: '/',
  server: {
    port: 5173,
    open: false,
  },
})

