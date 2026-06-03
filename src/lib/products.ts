import { ProductType } from "@/lib/product-type/ProductType";
import { cache } from "react";

type ProductApiPayload = {
  data?: ProductType[] | { content?: ProductType[] };
  content?: ProductType[];
};

function getProductApiBaseUrl() {
  return process.env.BASE_URL ?? "https://ishop.cheat.casa/api/v1";
}

export function extractProducts(payload: ProductApiPayload | ProductType[]) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload.content)) {
    return payload.content;
  }

  if (Array.isArray(payload.data)) {
    return payload.data;
  }

  if (Array.isArray(payload.data?.content)) {
    return payload.data.content;
  }

  return [];
}

export async function getProducts() {
  const response = await fetch(`${getProductApiBaseUrl()}/products`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const payload = (await response.json()) as ProductApiPayload | ProductType[];

  return extractProducts(payload);
}

export const getProductByUuid = cache(async (uuid: string) => {
  const products = await getProducts();

  return products.find((product) => product.uuid === uuid) ?? null;
});
