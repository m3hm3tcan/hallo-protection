import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductListProps, ProductsProps, productList, products } from '../data/products';
import { ProductModal } from "./ProductModal";


export const Products = () => {
  const [selectedCat, setselectedCat] = useState<string>(productList[0]?.cat || '');
  const [selectedProduct, setSelectedProduct] = useState<ProductsProps | null>(null);
  const handleCategorySelection = (cat: string) => {
    if (cat !== selectedCat) {
      setselectedCat(cat);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p: ProductsProps) => p.cat === selectedCat);
  }, [selectedCat]);

  return (
    <section id="termekek" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">Termékek</h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {productList.map(({ name, cat }: ProductListProps) => (
          <button key={cat} onClick={() => handleCategorySelection(cat)}>
            <Badge
              variant="secondary"
              className={`text-base ${selectedCat === cat ? 'border-b-2 border-red-500' : ''}`}
            >
              {name}
            </Badge>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {filteredProducts.map((product: ProductsProps) => (
            <motion.div
              key={`${product.title}-product-card`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="transition duration-300 
                 hover:shadow-[0_0_10px_2px_rgba(255,70,0,0.8)] cursor-pointer"   onClick={() => setSelectedProduct(product)}>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <img
                    src={`/images/products/${product.image}.png`}
                    alt={`product-${product.title}`}
                    className="w-[100px] lg:w-[170px] mx-auto"
                  />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>


        {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      </div>
    </section>
  );
};
