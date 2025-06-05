"use client";


import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../components/ProductsContext";


export default function CheckoutPage() {
	const context = useContext(ProductsContext);
	if (!context) throw new Error("Cannot retrieve products at checkout");
	const { selectedProducts } = context;
	const [productsInfos, setProductsInfos] = useState<any[]>([]);

	useEffect(() => {
			if (selectedProducts.length === 0) return;
			const uniqIds = [...new Set(selectedProducts)]

			fetch("/api/products?ids=" + uniqIds.join(","))
			.then((response) => response.json())
			.then((json) => setProductsInfos(json));
	}, [selectedProducts]); // Add dependency


  return (
    <div className="p-5">
      {productsInfos.length === 0 ? (
        <div>No products in your shopping cart</div>
      ) : (
        productsInfos.map((productInfo) => (
          <div key={productInfo._id} className="mb-2">
            {productInfo.name}
          </div>
        ))
      )}
    </div>
  );
}