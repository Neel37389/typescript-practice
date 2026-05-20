"use client";

import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const products = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "MacBook", price: 1999 },
    { id: 3, name: "AirPods", price: 299 },
  ];

  return (
    <div className="flex felx-col min-h-screen items-center justify-center p-8 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
