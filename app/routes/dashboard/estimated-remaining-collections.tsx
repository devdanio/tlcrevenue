import { createFileRoute } from "@tanstack/react-router";
import { PBIDashboard } from "~/components/PBIDashboard";

export const Route = createFileRoute(
  "/dashboard/estimated-remaining-collections"
)({
  loader: async () => {
    return { crumb: "Collections" };
  },
  component: PBIDashboard,
});
