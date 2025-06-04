"use client";
import { useEffect, useState } from "react";
import Product from "../../components/Product";


type ProductInfo = {
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
};

export default function Home() {
  const [productsInfo, setProductsInfo] = useState<ProductInfo[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProductsInfo(json));
  }, []);

  const categoryNames = [...new Set(productsInfo.map((p) => p.category))];

  return (
    <div className="p-5">
      {categoryNames.map((categoryName) => (
        <div key={categoryName}>
          <h2 className="text-2xl capitalize">{categoryName}</h2>
          <div className="flex flex-wrap gap-4">
            {productsInfo
              .filter((p) => p.category === categoryName)
              .map((product) => (
                <Product key={product.name} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
