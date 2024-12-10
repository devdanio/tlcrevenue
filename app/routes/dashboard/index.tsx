import { createFileRoute } from "@tanstack/react-router";
import MainGrid from "@/components/MainGrid";
import { PBIDashboard } from "@/components/PBIDashboard";

export const Route = createFileRoute("/dashboard/")({
  loader: async () => {
    return { crumb: "Overview" };
  },
  component: PBIDashboard,
});
