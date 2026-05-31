
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/lib/product-type/ProductType";
import Image from "next/image";
import Link from "next/link";

type ProductCartProps = Partial<ProductType> & {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
  href?: string;
};

export default function ProductCart({
  uuid,
  thumbnail,
  priceOut,
  name,
  id,
  title,
  price,
  image,
  href,
}: ProductCartProps) {
  const productName = name ?? title ?? "Untitled product";
  const productImage = thumbnail ?? image ?? "/next.svg";
  const productPrice = priceOut ?? price ?? 0;
  const detailHref = href ?? (uuid ? `/dashboard/products/${uuid}` : id ? `/products/${id}` : undefined);

  return (
    <Card className="relative mx-auto h-full w-full max-w-sm overflow-hidden rounded-2xl border border-slate-100 pt-0 shadow-md">
      <Image
        src={productImage}
        alt={productName}
        width={100}
        height={100}
        className="aspect-video w-full object-contain"
      />
      <CardHeader>
        <CardAction>
          {detailHref ? (
            <Link href={detailHref} className="relative z-40">
              <Badge variant="secondary">Details</Badge>
            </Link>
          ) : (
            <Badge variant="secondary">Details</Badge>
          )}
        </CardAction>
        <CardTitle className="line-clamp-2 text-base font-semibold text-slate-900">
          {productName}
        </CardTitle>
        <CardDescription className="mt-1 line-clamp-3 text-sm text-slate-600">
          ${productPrice.toFixed(2)}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  );
}
