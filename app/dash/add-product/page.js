// "use client";

// import { useState } from "react";

// export default function AddProductPage() {
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...form,
//           price: parseFloat(form.price),
//         }),
//       });

//       const data = await res.json();
//       alert(data.message || "Something went wrong");
//       setForm({ name: "", description: "", price: "", image: "" });
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//           required
//           className="w-full border px-3 py-2 rounded"
//         />

//         <textarea
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           placeholder="Description"
//           required
//           className="w-full border px-3 py-2 rounded"
//         ></textarea>

//         <input
//           type="number"
//           name="price"
//           value={form.price}
//           onChange={handleChange}
//           placeholder="Price"
//           required
//           className="w-full border px-3 py-2 rounded"
//         />

//         <input
//           type="text"
//           name="image"
//           value={form.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="w-full border px-3 py-2 rounded"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// }
