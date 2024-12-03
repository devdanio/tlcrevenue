import { createFileRoute } from "@tanstack/react-router";
import { PBIDashboard } from "~/components/PBIDashboard";

export const Route = createFileRoute("/dashboard/historical-net-revenue")({
  loader: async () => {
    return { crumb: "Historical Revenue" };
  },
  component: PBIDashboard,
});
