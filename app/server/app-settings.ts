import { createServerFn } from "@tanstack/start";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
const appSettingsSchema = z.object({
  iframe_url: z.string(),
});

export const getAppSettings = createServerFn({ method: "GET" }).handler(
  async () => {
    return await prisma.app_settings.findFirst();
  }
);

export const updateAppSettings = createServerFn({ method: "POST" })
  .validator(appSettingsSchema)
  .handler(async ({ data }) => {
    const appSettings = await prisma.app_settings.updateMany({
      data,
    });

    return appSettings;
  });
