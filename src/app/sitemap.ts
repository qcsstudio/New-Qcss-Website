import type { MetadataRoute } from "next";

const BASE_URL = "https://www.qcsstudio.com";

const routes: string[] = [
  "",
  "aboutus",
  "service",
  "product",
  "marketing",
  "ai_marketing",
  "campaigns",
  "webSaas",
  "ROIBluePrint",
  "qcsstudiodeck",
  "linkedinOptimization",
  "blogs",
  "contactus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => {
    const path = route === "" ? "" : `/${route}`;

    return {
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    };
  });
}
