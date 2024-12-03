import { createFileRoute } from "@tanstack/react-router";
import { PBIDashboard } from "~/components/PBIDashboard";

export const Route = createFileRoute("/dashboard/net-revenue-waterfall")({
  loader: async () => {
    return { crumb: "Revenue waterfall" };
  },
  component: PBIDashboard,
});
