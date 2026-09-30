"use client";

import { useRouter } from "next/navigation";
import { ProductType } from "../api/products/types";
import { useState } from "react";

export default function AddNewProduct() {
  const router = useRouter();

  const [form, setForm] = useState<ProductType>({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({ id: 0, name: "", price: 0, stock: 0 });
    window.location.reload();
  };

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-md hover:shadow-2xl transition overflow-hidden p-2">
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 border rounded-lg text-black"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          min={0}
          onChange={(e) =>
            setForm({ ...form, price: parseFloat(e.target.value) })
          }
          className="p-2 border rounded-lg text-black"
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          min={0}
          onChange={(e) =>
            setForm({ ...form, stock: parseInt(e.target.value) })
          }
          className="p-2 border rounded-lg text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
