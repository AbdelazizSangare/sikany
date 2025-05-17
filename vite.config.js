import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sikany.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    host: true,
    allowedHosts: ['sikany.onrender.com']
  }
});
