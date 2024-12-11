import { createFileRoute } from "@tanstack/react-router";
import { PBIDashboard } from "@/components/PBIDashboard";
import { getAppSettings } from "@/server/app-settings";

export const Route = createFileRoute("/dashboard/")({
  loader: async () => {
    const iframe_url = await getAppSettings();
    return { crumb: "Overview", iframe_url };
  },
  component: () => {
    const { iframe_url } = Route.useLoaderData();

    return <PBIDashboard url={iframe_url?.iframe_url} />;
  },
});
