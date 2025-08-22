import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

// ✅ GET (fetch all products)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("alipapa");
    const products = await db.collection("products").find({}).toArray();
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// ✅ POST (add product)
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("alipapa");

    const result = await db.collection("products").insertOne(body);

    return Response.json({ message: "Product added", insertedId: result.insertedId });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
