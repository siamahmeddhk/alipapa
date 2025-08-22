import Link from "next/link";
import clientPromise from "../lib/mongodb";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("alipapa");
  const products = await db.collection("products").find({}).toArray();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product._id.toString()} className="border rounded p-4 shadow">
            <Link href={`/products/${product._id.toString()}`}>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
