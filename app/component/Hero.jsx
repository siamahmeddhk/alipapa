"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Shop Smarter with <span className="text-yellow-300">NextShop</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-xl">
            Discover amazing deals on electronics, fashion, and more. 
            Your one-stop shop for everything you need.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/shop">
              <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
                Start Shopping
              </button>
            </Link>
            <Link href="/deals">
              <button className="px-6 py-3 rounded-2xl border border-white font-semibold hover:bg-white hover:text-indigo-700 transition">
                View Deals
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 mt-10 lg:mt-0"
        >
          <img
            src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" // replace with your product image
            alt="E-commerce shopping"
            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
