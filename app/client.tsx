// app/client.tsx
/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "./router";
import { ThemeProvider } from "@emotion/react";
import { createTheme, StyledEngineProvider } from "@mui/material";

const router = createRouter();

const theme = createTheme({
  cssVariables: true,
  // components: {
  //   MuiPopover: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  //   MuiPopper: {
  //     defaultProps: {
  //       container: rootElement,
  //     },
  //   },
  // },
});
hydrateRoot(
  document.getElementById("root")!,
  // <StyledEngineProvider injectFirst>
  //   <ThemeProvider theme={theme}>
  <StartClient router={router} />
  //   </ThemeProvider>
  // </StyledEngineProvider>
);
