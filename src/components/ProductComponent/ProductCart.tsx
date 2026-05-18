
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
import { productType } from "@/lib/Types/ProductType";
import Image from "next/image";

export default function ProductCart({
    title,
    description,
    image,
}: productType) {
    return(
        <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl shadow-md border border-slate-100 overflow-hidden h-full">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-60"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Details</Badge>
        </CardAction>
        <CardTitle className="text-base font-semibold text-slate-900 line-clamp-2">{title}</CardTitle>
        <CardDescription className="mt-1 text-sm text-slate-600 line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
    );
}
