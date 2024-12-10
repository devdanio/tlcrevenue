import { useVersion } from "@/hooks/useVersion";

export const PBIDashboard = () => {
  const { version } = useVersion();
  console.log("the version changed", version);

  const src =
    version === "live"
      ? "https://app.powerbi.com/view?r=eyJrIjoiNDlmN2Q2OWItMzAwYS00ZjgyLThkMzEtODgxNDQwOTY3N2NkIiwidCI6IjY1ZTQ5N2M5LTMyNTQtNDVmZi05YTFlLWQyMzQ2MjM0MWVkMCIsImMiOjN9&pageName=9d3b47b24628bfab1f13"
      : "https://app.powerbi.com/view?r=eyJrIjoiNTdiNTExM2EtMWNjYS00ZWQ1LWIwZTEtYjVlNGE1NDg4ZDQ0IiwidCI6IjY1ZTQ5N2M5LTMyNTQtNDVmZi05YTFlLWQyMzQ2MjM0MWVkMCIsImMiOjN9";
  return (
    <iframe
      title="TLC Dashboard"
      style={{
        width: "100%",
        height: "90vh",
      }}
      src={src}
      allowFullScreen={true}
      frameBorder={0}
    ></iframe>
  );
};
