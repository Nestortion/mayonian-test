// vite.config.ts
import { defineConfig } from "vite";
import vitereact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitereact(),
    // ...,
  ],
});
