import type { MetadataRoute } from "next";

import { getProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

const publicRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    const products = await getProducts();
    const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
      url: absoluteUrl(`/products/${product.uuid}`),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: [product.thumbnail],
    }));

    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
