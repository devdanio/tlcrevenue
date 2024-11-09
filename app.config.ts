import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    // build: {
    //   rollupOptions: {
    //     external: ["@mui/utils"],
    //     output: {
    //       manualChunks: {
    //         mui: ["@mui/material", "@mui/icons-material"],
    //       },
    //     },
    //   },
    // },
    // optimizeDeps: {
    //   include: ["@mui/material", "@mui/icons-material"],
    //   exclude: ["@mui/utils"],
    // },
    // ssr: {
    //   noExternal: [
    //     "@mui/system",
    //     "@mui/icons-material",
    //     "@mui/lab",
    //     "@mui/material",
    //     "@mui/styles",
    //     "@mui/x-date-pickers",
    //     "@mui/util",
    //   ],
    // },
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
