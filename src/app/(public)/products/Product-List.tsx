import ProductCart from "@/components/ProductComponent/ProductCart";
import { getProducts } from "@/lib/products";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <main>
      <section className="mx-auto my-10 w-full">
        <h2 className="text-center text-2xl font-bold uppercase text-blue-700">
          Products Page
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCart key={product.uuid} {...product} />
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-6 max-w-xl rounded-lg border border-dashed p-6 text-center text-muted-foreground">
            No products found.
          </p>
        )}
      </section>
    </main>
  );
}
