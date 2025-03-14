import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://bauroccella.github.io/pokedex/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
})
