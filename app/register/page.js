"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    // NextAuth Email/Password login
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/products", // where user goes after login
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6">
          Create an Account
        </h1>

        {/* Email + Password Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl text-black focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl text-black focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Sign Up / Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-3 text-sm">or</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        {/* Switch to Login */}
       
      </motion.div>
    </section>
  );
};

export default RegisterPage;
