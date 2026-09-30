"use client";

import { useRouter } from "next/navigation";
import { ProductType } from "../api/products/types";

export default function ProductList({ product }: { product: ProductType }) {
  const router = useRouter();

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl hover:shadow-2xl transition overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>

        <p className="text-blue-600 font-bold mt-2">
          Rp.{product.price.toLocaleString("id-ID")}
        </p>
        <div className="flex justify-between items-center mt-4 gap-2">
          <button
            onClick={() => router.push(`/products/${product.id}`)}
            className="mt-4 w-full bg-blue-500 from-blue-500 to-purple-600 text-white py-2 rounded-lg text-sm transition"
          >
            View Details
          </button>
          <button
            onClick={async () => {
              await fetch(`http://localhost:3000/api/products/${product.id}`, {
                method: "DELETE",
              });
              router.refresh();
            }}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg text-sm transition"
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
