import { NextResponse } from "next/server";

import { getProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = await getProducts();

    return NextResponse.json({
      success: true,
      data: {
        content: products,
      },
      status: 200,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
