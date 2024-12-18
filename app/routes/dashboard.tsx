import CssBaseline from "@mui/material/CssBaseline";
import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { createServerFn } from "@tanstack/start";
import { getAuth } from "@clerk/tanstack-start/server";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "~/components/AppNavbar";
import Header from "~/components/Header";
import MainGrid from "~/components/MainGrid";
import SideMenu from "~/components/SideMenu";
import AppTheme from "~/theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "~/theme/customizations";
import { request } from "http";
import { getWebRequest } from "vinxi/http";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { userId } = await getAuth(getWebRequest());

  if (!userId) {
    throw redirect({
      to: "/",
    });
  }
  return {
    userId,
  };
});

function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          // backgroundColor: theme.vars
          //   ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
          //   : alpha(theme.palette.background.default, 1),
          overflow: "auto",
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
}

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  beforeLoad: async () => {
    console.log("this is being called");

    return await fetchClerkAuth();
  },
  ssr: false,
  // loader: async () => {
  //   return { crumb: "Dashboard" };
  // },
});
