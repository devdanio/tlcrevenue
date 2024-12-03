import { createFileRoute } from "@tanstack/react-router";
import { PBIDashboard } from "~/components/PBIDashboard";

export const Route = createFileRoute("/dashboard/estimated-net-revenue")({
  loader: async () => {
    return { crumb: "Net Revenue" };
  },
  component: PBIDashboard,
});
