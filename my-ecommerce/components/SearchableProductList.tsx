"use client"; // marks as a client component (for usestate and useeffect)

import { useState } from "react";
import Product from "./Product"; // resuable component for displaying a single product

type ProductInfo = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
};

export default function SearchableProductList({ products }: { products: ProductInfo[] }) {
  const [phrase, setPhrase] = useState(""); // track search input

  // filter products based on search phrase
  const filtered = phrase
    ? products.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()))
    : products;

    // extract unique category names from filtered products
  const categoryNames = [...new Set(filtered.map(p => p.category))];

  return (
    <div>
      <input
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
        type="text"
        placeholder="Search for products..."
        className="bg-gray-100 w-full py-2 px-4 rounded-xl mb-4"
      />

      {categoryNames.map((categoryName) => (
        <div key={categoryName}>
          <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
          <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
            {filtered
              .filter(p => p.category === categoryName)
              .map(product => (
                <div key={product._id} className="px-5 snap-start">
                  <Product product={product} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
