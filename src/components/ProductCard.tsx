interface Product {
  id: number;
  name: string;
  price: number;
  inStock?: boolean;
}

export default function ProductCard({ name, price, inStock = true }: Product) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p className={inStock ? "text-green-500" : "text-red-500"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button
        disabled={!inStock}
        className={
          !inStock
            ? "opacity-50 cursor-not-allowed border rounded p-1"
            : "border rounded p-1"
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
