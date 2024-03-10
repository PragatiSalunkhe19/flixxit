import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your custom aliases here
      '@utils': '/src/utils',
      '@store': '/src/store',
      '@components': '/src/components',
      '@pages': '/src/pages',
      // Add more aliases as needed...
    },
  },
});

