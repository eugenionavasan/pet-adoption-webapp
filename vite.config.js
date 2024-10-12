import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Dist should be in the root
    rollupOptions: {
      input: './src/index.html'  // Explicitly reference the index.html inside the src folder
    }
  }
});