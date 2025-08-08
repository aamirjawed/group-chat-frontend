import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "connect-src 'self' http://localhost:5000 https://group-chat-backend-s7xa.onrender.com"
    }
  },
  preview: {
    headers: {
      'Content-Security-Policy': "connect-src 'self' http://localhost:5000 https://group-chat-backend-s7xa.onrender.com"
    }
  }
})