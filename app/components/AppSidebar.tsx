import { ChevronUp, Home, User2 } from "lucide-react";
import { createLink, Link } from "@tanstack/react-router";
import { Protect, SignOutButton } from "@clerk/tanstack-start";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk, useUser } from "@clerk/tanstack-start";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useVersion } from "@/hooks/useVersion";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
];

export function AppSidebar() {
  const { user } = useUser();

  const isAdmin =
    user?.primaryEmailAddress?.emailAddress.includes("tlcrevenue.com") &&
    !user?.primaryEmailAddress?.emailAddress.includes("demotestuser1");
  const DropDownLink = createLink(DropdownMenuItem);
  const { version, setVersion } = useVersion();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-between items-center pr-4">
        <img
          src="/images/horizontal-logo.png"
          alt="TLC Revenue logo"
          className="h-[40px] w-fit"
        />
        <div className="flex flex-col gap-1">
          <Switch
            id="mode"
            checked={version === "live"}
            onCheckedChange={() => {
              setVersion(version === "live" ? "demo" : "live");
            }}
          />
          <Label htmlFor="mode">Live</Label>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user?.primaryEmailAddress?.emailAddress ?? ""}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropDownLink to="/dashboard/settings/profile">
                  Account
                </DropDownLink>

                {/* <Protect role="org:app_admin"> */}
                {isAdmin ? (
                  <DropDownLink to="/dashboard/settings/app">
                    App settings
                  </DropDownLink>
                ) : null}

                {/* </Protect> */}

                <SignOutButton redirectUrl="/">
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
