import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getAppSettings, updateAppSettings } from "@/server/app-settings";

import { Label } from "@radix-ui/react-dropdown-menu";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";

import { useForm } from "react-hook-form";

export const Route = createFileRoute("/dashboard/settings/app")({
  component: RouteComponent,
  loader: async () => {
    const appSettings = await getAppSettings();
    return {
      appSettings,
    };
  },
});

function RouteComponent() {
  const { appSettings } = Route.useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      iframe_url: appSettings?.iframe_url ?? "",
    },
  });

  const onSubmit = (data: { iframe_url: string }) => {
    return updateAppSettings({ data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-3 flex-col items-start w-[300px]"
    >
      <Label>Iframe URL</Label>

      <Textarea
        {...register("iframe_url", {
          required: "This field is required",
          minLength: { value: 1, message: "Text cannot be empty" },
        })}
        placeholder="Iframe URL"
        rows={8}
      />
      {errors.iframe_url && (
        <span className="text-red-500">{errors.iframe_url.message}</span>
      )}
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Saving..." : `Save`}
      </Button>
    </form>
  );
}
