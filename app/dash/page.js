
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FiHome, FiBox } from "react-icons/fi";

// export default function DashboardPage() {
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("/api/product", { cache: "no-store" });
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/product", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...form,
//           price: parseFloat(form.price),
//         }),
//       });

//       const data = await res.json();
//       if (data.error) {
//         alert("Error: " + data.error);
//       } else {
//         alert(data.message || "Product added successfully!");
//         setForm({ name: "", description: "", price: "", image: "" });
//         fetchProducts(); // refresh product list
//       }
//     } catch (error) {
//       console.error("Failed to add product:", error);
//       alert("Failed to add product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-full md:w-64 bg-gray-800 text-white shadow-lg flex flex-col">
//         <div className="px-6 py-4 border-b border-gray-700 text-center md:text-left">
//           <h1 className="text-xl md:text-2xl font-bold text-blue-400">
//             My Dashboard
//           </h1>
//         </div>
//         <nav className="flex-1 px-4 py-4 md:py-6 space-y-2 md:space-y-4 flex md:block justify-center md:justify-start">
//           <Link
//             href="/"
//             className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg"
//           >
//             <FiHome /> Home
//           </Link>
//           <Link
//             href="/products"
//             className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg"
//           >
//             <FiBox /> Products
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-4 md:p-6 space-y-6">
//         <h2 className="text-xl md:text-2xl text-black font-semibold mb-4">
//           Dashboard
//         </h2>

//         {/* Add Product Form */}
//         <div className="bg-black p-4 md:p-6 rounded-lg shadow">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">
//             Add New Product
//           </h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Product Name"
//               required
//               className="w-full border px-3 py-2 rounded"
//             />
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Description"
//               required
//               className="w-full border px-3 py-2 rounded"
//             />
//             <input
//               type="number"
//               name="price"
//               value={form.price}
//               onChange={handleChange}
//               placeholder="Price"
//               required
//               className="w-full border px-3 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="image"
//               value={form.image}
//               onChange={handleChange}
//               placeholder="Image URL (optional)"
//               className="w-full border px-3 py-2 rounded"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               {loading ? "Adding..." : "Add Product"}
//             </button>
//           </form>
//         </div>

//         {/* Product List */}
//         <div className="bg-white p-4 md:p-6 rounded-lg shadow">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">
//             All Products
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {products.map((product) => (
//               <li
//                 key={product._id}
//                 className="border rounded-lg p-4 shadow flex flex-col"
//               >
//                 {product.image && (
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="w-full h-40 object-cover mb-2 rounded"
//                   />
//                 )}
//                 <h2 className="text-base md:text-lg font-bold">
//                   {product.name}
//                 </h2>
//                 <p className="text-gray-600 text-sm md:text-base">
//                   {product.description}
//                 </p>
//                 <p className="text-blue-600 font-bold">${product.price}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiBox } from "react-icons/fi";

// Utility function to validate URLs
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

export default function DashboardPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product", { cache: "no-store" });
      const data = await res.json();
      console.log("Fetched products:", data); // Debug the data
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          image: form.image || "/images/placeholder.jpg", // Default image if empty
        }),
      });

      const data = await res.json();
      if (data.error) {
        alert("Error: " + data.error);
      } else {
        alert(data.message || "Product added successfully!");
        setForm({ name: "", description: "", price: "", image: "" });
        fetchProducts(); // refresh product list
      }
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white shadow-lg flex flex-col">
        <div className="px-6 py-4 border-b border-gray-700 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-blue-400">
            My Dashboard
          </h1>
        </div>
        <nav className="flex-1 px-4 py-4 md:py-6 space-y-2 md:space-y-4 flex md:block justify-center md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg"
          >
            <FiHome /> Home
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg"
          >
            <FiBox /> Products
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <h2 className="text-xl md:text-2xl text-black font-semibold mb-4">
          Dashboard
        </h2>

        {/* Add Product Form */}
        <div className="bg-black p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Add New Product
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL (optional)"
              className="w-full border px-3 py-2 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>

        {/* Product List */}
        {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            All Products
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <li
                key={product._id}
                className="border rounded-lg p-4 shadow flex flex-col"
              >
                {product.image && isValidUrl(product.image) ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2 rounded">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <h2 className="text-base md:text-lg font-bold">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </li>
            ))}
          </ul>
        </div> */}
      </main>
    </div>
  );
}