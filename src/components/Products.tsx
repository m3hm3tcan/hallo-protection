import { Badge } from "./ui/badge";
import {
  Card,
  // CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductListProps, ProductsProps, productList, products } from '../data/products';
import { useEffect, useState } from "react";


export const Products = () => {
  const [selectedCat, setselectedCat] = useState<string>('');

  useEffect(() => {
    setselectedCat(productList[0].cat);
  }, [])

  const handleCategorySelection = (cat: string) => {
    setselectedCat(cat);
  }

  return (
    <section
      id="termekek"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Termékek
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {productList.map(({ name, cat }: ProductListProps) => (
          <div key={cat} onClick={() => handleCategorySelection(cat)}>
            <Badge
              variant="secondary"
              className={`text-base ${selectedCat === cat ? 'border-b-2 border-red-500' : ''}`}
            >
              {name}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.filter((p: ProductsProps) => p.cat === selectedCat).map(({ title, image }: ProductsProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            {/* <CardContent>{description}</CardContent> */}

            <CardFooter>
              <img
                src={`/images/products/${image}.jpg`}
                alt={`product-${title}`}
                className="w-[100px] lg:w-[170px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
