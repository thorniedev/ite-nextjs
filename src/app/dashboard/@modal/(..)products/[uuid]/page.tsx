import { notFound } from "next/navigation";

import ProductDetailView from "@/components/ProductComponent/ProductDetailView";
import { ProductRouteModal } from "@/components/modal/ProductModal";
import { createProductMetadata } from "@/lib/product-metadata";
import { getProductByUuid } from "@/lib/products";

type ProductModalPageProps = {
  params: Promise<{
    uuid: string;
  }>;
};

export async function generateMetadata({ params }: ProductModalPageProps) {
  const { uuid } = await params;

  return createProductMetadata(uuid);
}

export default async function ProductModalPage({ params }: ProductModalPageProps) {
  const { uuid } = await params;
  const product = await getProductByUuid(uuid);

  if (!product) {
    notFound();
  }

  return (
    <ProductRouteModal>
      <ProductDetailView product={product} />
    </ProductRouteModal>
  );
}
