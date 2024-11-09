import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/dashboard/estimated-remaining-collections"
)({
  loader: async () => {
    return { crumb: "Collections" };
  },
  component: () => (
    <iframe
      title="TLC Dashboard v0.4"
      style={{
        width: "100%",
        height: "90vh",
      }}
      src="https://app.powerbi.com/view?r=eyJrIjoiNTdiNTExM2EtMWNjYS00ZWQ1LWIwZTEtYjVlNGE1NDg4ZDQ0IiwidCI6IjY1ZTQ5N2M5LTMyNTQtNDVmZi05YTFlLWQyMzQ2MjM0MWVkMCIsImMiOjN9"
      allowFullScreen="true"
      frameBorder={0}
    ></iframe>
  ),
});
