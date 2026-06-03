import type { Metadata } from "next";

import { getProductByUuid } from "@/lib/products";

export async function createProductMetadata(uuid: string): Promise<Metadata> {
  const product = await getProductByUuid(uuid);

  if (!product) {
    return {
      title: "Product not found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = `View ${product.name}, available for $${product.priceOut.toFixed(2)}.`;
  const productPath = `/products/${product.uuid}`;

  return {
    title: product.name,
    description,
    alternates: {
      canonical: productPath,
    },
    openGraph: {
      title: product.name,
      description,
      type: "website",
      url: productPath,
      images: [
        {
          url: product.thumbnail,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
      images: [product.thumbnail],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
