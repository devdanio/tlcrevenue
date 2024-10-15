import { createFileRoute } from "@tanstack/react-router";
import MainGrid from "~/components/MainGrid";

export const Route = createFileRoute("/dashboard/")({
  component: () => <MainGrid />,
});
