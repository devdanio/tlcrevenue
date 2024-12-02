import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        "@mui/material",
        "@mui/system",
        "@mui/icons-material",
        "@emotion/react",
        "@emotion/styled",
        "@emotion/cache",
        "@emotion/server",
        "@emotion/utils",
      ],
    },

    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
