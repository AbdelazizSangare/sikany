import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Récupération des variables d'environnement
const API_URL = process.env.VITE_API_URL;
const HOST_URL = process.env.VITE_HOST_URL;

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    host: true,
    allowedHosts: [HOST_URL]
  }
});
