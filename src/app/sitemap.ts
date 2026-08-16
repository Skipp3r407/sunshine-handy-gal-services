import type { MetadataRoute } from "next";
import { cleaningTipGuides } from "@/lib/cleaning-tips-data";

const baseUrl = "https://sunshineshandygalservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/service-areas", priority: 0.9, changeFrequency: "weekly" },
    { path: "/why-hire-us", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cleaning-tips", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "weekly" },
    { path: "/testimonials", priority: 0.8, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  ] as const;

  const guidePages = cleaningTipGuides.map((guide) => ({
    path: `/cleaning-tips/${guide.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...pages, ...guidePages].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
