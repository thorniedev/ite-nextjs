const fallbackSiteUrl = "http://localhost:3000";

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : fallbackSiteUrl);

  return configuredUrl.replace(/\/$/, "");
}

export const siteConfig = {
  name: "ITE Next Shop",
  shortName: "ITE Shop",
  description:
    "A Next.js learning storefront with products, blog posts, and App Router examples.",
  url: getSiteUrl(),
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
