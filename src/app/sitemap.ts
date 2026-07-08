import { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${base}/tratta/${route.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
