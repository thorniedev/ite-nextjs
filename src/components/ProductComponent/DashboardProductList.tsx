import Link from "next/link";

import ProductCart from "@/components/ProductComponent/ProductCart";
import { getProducts } from "@/lib/products";

export default async function DashboardProductList() {
  const products = await getProducts();

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-muted-foreground">
            Click Details to open the product by intercepted route.
          </p>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <Link href="/dashboard/create" className="text-blue-600 hover:underline">
            Create New Product
          </Link>
          <Link href="/dashboard/edit" className="text-blue-600 hover:underline">
            Edit Product
          </Link>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCart
              key={product.uuid}
              {...product}
              href={`/products/${product.uuid}`}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          No products found.
        </p>
      )}
    </div>
  );
}
