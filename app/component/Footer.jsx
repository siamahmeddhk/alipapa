"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold mb-2">
            Ali<span className="text-yellow-300">papa</span>
          </h2>
          <p className="text-gray-200 max-w-sm">
            Your one-stop online shop for fashion, electronics, and more.
            Find amazing deals every day!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-300 transition">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-lg text-black flex-1"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link href="#"><Facebook size={24} /></Link>
            <Link href="#"><Twitter size={24} /></Link>
            <Link href="#"><Instagram size={24} /></Link>
            <Link href="#"><Linkedin size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-200">
        © {new Date().getFullYear()} Ali<span className="text-yellow-300">papa</span>. All rights reserved.
      </div>
    </footer>
  );
}
