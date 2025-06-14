import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/myCV/', // Only needed if deploying to GitHub Pages or a subfolder

  server: {
    host: '0.0.0.0', // Enables access from mobile devices on the same network
    port: 5173,       // Default Vite port; can change if needed
  },
});
