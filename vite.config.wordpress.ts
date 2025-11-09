import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// WordPress-specific Vite config
export default defineConfig({
  build: {
    outDir: 'wordpress-plugin/build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/wordpress-entry.tsx'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

