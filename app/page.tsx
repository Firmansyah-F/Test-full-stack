import { ProductType } from "./api/products/types";
import AddNewProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const products: ProductType[] = await response.json();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black">Product List</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-blue-500">
          Add New Product
        </div>
        <AddNewProduct />

        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-black">
            Available Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
