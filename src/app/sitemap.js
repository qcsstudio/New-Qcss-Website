const siteUrl = "https://www.qcsstudio.com";

const routes = [
  "",
  "aboutus",
  "service",
  "product",
  "marketing",
  "blogs",
  "contactus",
];

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/+$/, "/"),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
