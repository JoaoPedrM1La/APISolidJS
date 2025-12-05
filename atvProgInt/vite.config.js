import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    proxy: {
      // Quando o browser requisitar /api/..., Vite encaminha para o backend em 4000
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api') // opcional
      }
    }
  },
  build: { target: 'esnext' }
});
