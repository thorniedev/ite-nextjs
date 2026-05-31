import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ProductType } from "@/lib/product-type/ProductType";

export default function ProductDetailView({ product }: { product: ProductType }) {
  return (
    <article className="grid gap-6 md:grid-cols-[260px_1fr]">
      <div className="rounded-lg border bg-white p-4">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={360}
          height={260}
          className="aspect-square w-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Product detail</p>
          <h1 className="text-2xl font-semibold leading-tight">{product.name}</h1>
        </div>

        <p className="text-xl font-semibold">${product.priceOut.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">UUID: {product.uuid}</p>

        <div className="flex flex-wrap gap-3">
          <Button>Add To Cart</Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/products">Back to products</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
