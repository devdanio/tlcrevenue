import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        "@mui/system",
        "@mui/icons-material",
        "@mui/lab",
        "@mui/material",
        "@mui/styles",
        "@mui/x-date-pickers",
        "@mui/util",
      ],
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
