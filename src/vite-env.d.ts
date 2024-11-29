/// <reference types="vite/client" />

export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000, // Đặt cổng thành 3000
    },
  });