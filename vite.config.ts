import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@common": path.resolve(__dirname, "./src/App/common"),
      "@services": path.resolve(__dirname, "./src/App/services"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@hooks": path.resolve(__dirname, "./src/App/Hooks"),
      "@utils": path.resolve(__dirname, "./src/App/utils"),
      "@context": path.resolve(__dirname, "./src/App/Context"),
    }
  }
})
