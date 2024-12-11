import {
  createFileRoute,
  redirect,
  Outlet,
  createLink,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { getAuth } from "@clerk/tanstack-start/server";
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
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import {
  OrganizationSwitcher,
  useOrganizationList,
} from "@clerk/tanstack-start";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { userId, orgPermissions, orgId } = await getAuth(getWebRequest());

  const hasActiveOrg = !!orgId;

  if (!userId) {
    throw redirect({
      to: "/",
    });
  }
  return {
    userId,
    hasActiveOrg,
  };
});

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  beforeLoad: async () => {
    return await fetchClerkAuth();
  },
  ssr: false,
});

function Dashboard() {
  const CrumbLink = createLink(BreadcrumbLink);
  const { isLoaded, setActive, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const organization = userMemberships.data?.[0]?.organization.id;
  useEffect(() => {
    setActive?.({
      organization,
    });
  }, [organization]);

  if (!isLoaded) {
    return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;
  }

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
