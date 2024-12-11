import { useVersion } from "@/hooks/useVersion";

export const PBIDashboard = ({ url }: { url?: string }) => {
  const { version } = useVersion();

  const src =
    version === "live"
      ? url
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
