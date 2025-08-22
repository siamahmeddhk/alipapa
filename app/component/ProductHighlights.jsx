"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: "$299.99",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Smartwatch with Health Tracking",
    price: "$199.99",
    imageUrl:
      "https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "4K OLED Gaming Monitor",
    price: "$799.99",
    imageUrl:
      "https://images.unsplash.com/photo-1590212151175-e58edd96185b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductHighlights() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
            Check out our latest and most popular items.
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative w-full h-64 hover:scale-105 transition-transform duration-500">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-yellow-400 text-2xl font-semibold">
                    {product.price}
                  </p>
                </div>
                <Link href={`/products`}>
                  <button className="w-full mt-6 px-5 py-3 rounded-2xl border border-white font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
