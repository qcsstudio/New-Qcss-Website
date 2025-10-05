const siteUrl = "https://www.qcsstudio.com";

const routes = [
  "",
  "aboutus",
  "ai_marketing",
  "campaigns",
  "contactus",
  "home",
  "linkedinOptimization",
  "marketing",
  "product",
  "qcsstudiodeck",
  "ROIBluePrint",
  "service",
  "webSaas",
  "blogs",
];

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/+$/, "/"),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "blogs" ? 0.8 : 0.7,
  }));
}
