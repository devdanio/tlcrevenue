/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";
// import AppTheme from "./theme/AppTheme";
// import {
//   chartsCustomizations,
//   dataGridCustomizations,
//   datePickersCustomizations,
//   treeViewCustomizations,
// } from "@/theme/customizations";
// import CssBaseline from "@mui/material/CssBaseline";
// import { StyledEngineProvider } from "@mui/material";
const router = createRouter();
// const xThemeComponents = {
//   ...chartsCustomizations,
//   ...dataGridCustomizations,
//   ...datePickersCustomizations,
//   ...treeViewCustomizations,
// };
hydrateRoot(
  document,
  // <AppTheme themeComponents={xThemeComponents}>
  //   <StyledEngineProvider injectFirst />
  //   <CssBaseline enableColorScheme />
  <StartClient router={router} />
  // </AppTheme>
);
