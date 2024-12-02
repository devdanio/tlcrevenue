// app/routes/__root.tsx
import { createRootRoute } from "@tanstack/react-router";

import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ClerkProvider } from "@clerk/tanstack-start";
import appCSS from "../main.css?url";

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "~/theme/customizations";

import "@fontsource-variable/lexend-deca";
import AppTheme from "~/theme/AppTheme";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TLC Revenue",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
    ],
    links: [
      { rel: "stylesheet", href: appCSS },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    console.log("goign to run in tbe browser");

    setIsBrowser(true);
  }, []);
  console.log("dasdlfkj alsdkfj ");

  return (
    <ClerkProvider>
      {/* <StyledEngineProvider injectFirst> */}
      {/* <AppTheme> */}

      <RootDocument>
        <Outlet />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </RootDocument>

      {/* </AppTheme> */}
      {/* </StyledEngineProvider> */}
    </ClerkProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
