import type { Metadata } from "next";

import ProductList from "./Product-List"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse products in the ITE Next Shop catalog.",
  alternates: {
    canonical: "/products",
  },
};

export default function page() {
  return (
    <div className="min-h-screen">

        <ProductList/>
    </div>
  )
}
