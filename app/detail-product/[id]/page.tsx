import { ProductType } from "@/app/api/products/types";

async function getProduct(id: string): Promise<ProductType> {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}

export default async function DetailProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl hover:shadow-2xl transition overflow-hidden p-4">
      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

      <p className="text-lg text-gray-600">
        Rp {product.price.toLocaleString("id-ID")}
      </p>

      <p className="text-md text-gray-500">Stock: {product.stock}</p>
    </div>
  );
}
