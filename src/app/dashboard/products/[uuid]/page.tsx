import { notFound } from "next/navigation";

import ProductDetailView from "@/components/ProductComponent/ProductDetailView";
import { getProductByUuid } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    uuid: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { uuid } = await params;
  const product = await getProductByUuid(uuid);

  if (!product) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <ProductDetailView product={product} />
    </main>
  );
}
