import { notFound } from "next/navigation";

import ProductDetailView from "@/components/ProductComponent/ProductDetailView";
import { ProductRouteModal } from "@/components/modal/ProductModal";
import { getProductByUuid } from "@/lib/products";

type ProductModalPageProps = {
  params: Promise<{
    uuid: string;
  }>;
};

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
