// app/routes/__root.tsx
import { createRootRoute } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ClerkProvider } from "@clerk/tanstack-start";
import appCSS from "../main.css?url";

import "@fontsource-variable/lexend-deca";
import AppTheme from "@/theme/AppTheme";
import { AppContext, AppContextType } from "@/providers/AppProvider";

export const Route = createRootRoute({
  ssr: false,
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
  const [version, setVersion] = useState<"live" | "demo">(
    Cookies.get("version") || "live"
  );

  const handleSetVersion = (version: "live" | "demo") => {
    Cookies.set("version", version);
    setVersion(version);
  };
  return (
    <AppContext.Provider value={{ version, setVersion: handleSetVersion }}>
      <ClerkProvider>
        <RootDocument>
          <Outlet />
          {/* <TanStackRouterDevtools position="bottom-right" /> */}
        </RootDocument>
      </ClerkProvider>
    </AppContext.Provider>
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
