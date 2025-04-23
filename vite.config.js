import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/carshop/', // Tämä määrittää oikean polun GitHub Pagesille
});
