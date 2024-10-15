// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import commonjs from "vite-plugin-commonjs";
import tsConfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  vite: {
    plugins: [
      commonjs(),
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ],
    ssr: {
      noExternal: ["@mui/icons-material", "@mui/material"]
      // Ensure these packages are bundled
    },
    optimizeDeps: {
      include: ["@mui/icons-material/HomeRounded"]
      // Ensure Vite knows to handle this import
    }
  }
});
export {
  app_config_default as default
};
