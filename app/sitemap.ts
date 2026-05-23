import type { MetadataRoute } from "next";
import { resources } from "@/lib/content";

const BASE = "https://somastartup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/register`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/get-involved`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
