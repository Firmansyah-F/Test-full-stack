import type { ProductType } from "./types";

export const products: ProductType[] = [
  { id: 1, name: "Sepeda", price: 500000, stock: 100 },
  { id: 2, name: "Laptop", price: 2000000, stock: 50 },
  { id: 3, name: "Kulkas", price: 4000000, stock: 200 },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(request: Request) {
  const newProduct: ProductType = await request.json();
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedProduct: ProductType = await request.json();
  const index = products.findIndex((p) => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
    return Response.json(updatedProduct);
  }
  return Response.json({ error: "Product not found" }, { status: 404 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return Response.json({ message: "Product deleted" });
  }
  return Response.json({ error: "Product not found" }, { status: 404 });
}
