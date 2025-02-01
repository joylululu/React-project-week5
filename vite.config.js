import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React-project-week5/", // 這個一定要加上正確的專案名稱
  plugins: [react()],
});
