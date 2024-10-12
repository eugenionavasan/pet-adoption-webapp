import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './index.html',  // Correctly point to the HTML file
    },
  }
})