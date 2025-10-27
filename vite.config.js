import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/clycer/', // Coincide con el nombre del repo
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Define main.jsx como entrada
    },
  },
});