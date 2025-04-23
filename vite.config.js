import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Carshop_Harjoitus/', // Päivitä tämä vastaamaan GitHub Pages -polkua
});
