import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      external: [
        // Add the path to your App.jsx file here
        './app.jsx'
      ]
    }
  }
})