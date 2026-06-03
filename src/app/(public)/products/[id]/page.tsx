import { notFound } from "next/navigation";

import ProductDetailView from "@/components/ProductComponent/ProductDetailView";
import { createProductMetadata } from "@/lib/product-metadata";
import { getProductByUuid } from "@/lib/products";

type PublicProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: PublicProductDetailPageProps) {
  const { id } = await params;

  return createProductMetadata(id);
}

export default async function PublicProductDetailPage({
  params,
}: PublicProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductByUuid(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <ProductDetailView product={product} />
    </main>
  );
}
