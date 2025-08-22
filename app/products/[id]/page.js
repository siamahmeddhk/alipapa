import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const client = await clientPromise;
  const db = client.db("alipapa"); // use your DB name
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(params.id) });

  if (!product) {
    return <div className="p-5">Product not found</div>;
  }

  return (
    <div className="p-5 max-w-2xl mx-auto border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>

      {product.image ? (
        <Image width={200} height={200}
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded">
          No Image
        </div>
      )}
    </div>
  );
}
