import CssBaseline from "@mui/material/CssBaseline";
import {
  createFileRoute,
  redirect,
  Outlet,
  createLink,
} from "@tanstack/react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { createServerFn } from "@tanstack/start";
import { getAuth } from "@clerk/tanstack-start/server";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "@/components/AppNavbar";
import Header from "@/components/Header";
import MainGrid from "@/components/MainGrid";
import SideMenu from "@/components/SideMenu";
import AppTheme from "@/theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "@/theme/customizations";
import { request } from "http";
import { getWebRequest } from "vinxi/http";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@radix-ui/react-separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

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

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  beforeLoad: async () => {
    console.log("this is being called");

    return await fetchClerkAuth();
  },
  ssr: false,
});

function Dashboard(props: { disableCustomTheme?: boolean }) {
  const CrumbLink = createLink(BreadcrumbLink);
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbItem className="hidden md:block">
                <CrumbLink to={"/dashboard"}>Dashboard</CrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
