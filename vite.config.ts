import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // Debe coincidir con el nombre del repositorio
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
