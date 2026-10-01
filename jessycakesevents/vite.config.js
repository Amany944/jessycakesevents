import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base relative pour GitHub Pages (project pages) : fonctionne en local comme en prod
  base: './',
})
