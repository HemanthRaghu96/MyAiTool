import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
      "react/jsx-runtime": require.resolve("react/jsx-runtime"),
    },
  },
  optimizeDeps: {
    exclude: ["react", "react-dom"], // Prevent Vite from pre-bundling React
  },
});
