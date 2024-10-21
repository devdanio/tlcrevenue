import { createFileRoute } from "@tanstack/react-router";
import MainGrid from "~/components/MainGrid";

export const Route = createFileRoute("/dashboard/")({
  component: () => (
    <iframe
      title="TLC Dashboard v0.4"
      style={{
        width: "100%",
        height: "90vh",
      }}
      src="https://app.powerbi.com/view?r=eyJrIjoiNTdiNTExM2EtMWNjYS00ZWQ1LWIwZTEtYjVlNGE1NDg4ZDQ0IiwidCI6IjY1ZTQ5N2M5LTMyNTQtNDVmZi05YTFlLWQyMzQ2MjM0MWVkMCIsImMiOjN9"
      frameborder="0"
      allowfullscreen="true"
    ></iframe>
  ),
});
