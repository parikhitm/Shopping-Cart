import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => {
          // Map /api/products to /dummyjson/products 
          if (path === '/api/products') return '/products'
          // Map /api/products/1 to /dummyjson/products/1
          if (path.startsWith('/api/products/')) return path.replace('/api/', '/')
          return path
        }
      }
    }
  }
})
