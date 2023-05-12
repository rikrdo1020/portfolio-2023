import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-2023/',
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, "build"),
  }
})
