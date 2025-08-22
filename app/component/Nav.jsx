

// "use client";

// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { useSession, signOut } from "next-auth/react";

// const Nav = () => {
//   const { data: session } = useSession();

//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">

//         {/* Logo */}
//         <Link href="/" className="text-2xl font-extrabold tracking-wide">
//           Ali<span className="text-yellow-300">papa</span>
//         </Link>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-6 font-medium items-center">
//           <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
//           <Link href="/products" className="hover:text-yellow-300 transition">Products</Link>

//           {session ? (
//             <>
//              <Link href="/dash" className="hover:text-green-200 transition">Dashboard</Link>
//               {/* Logged-in User Info */}
//               <div className="flex items-center gap-3">
//                 {session.user?.image && (
//                   <img
//                     src={session.user.image}
//                     alt={session.user.name}
//                     className="w-8 h-8 rounded-full border-2 border-white"
//                   />
//                 )}
//                 <span className="hover:text-yellow-300 transition">{session.user?.name}</span>
//                 <button
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                   className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-400 transition"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <Link href="/login" className="hover:text-yellow-300 transition">Login</Link>
//               <Link href="/register" className="hover:text-red-500 transition">Register</Link>
//             </>
//           )}
//         </div>

//         {/* Cart Button */}
//         <div className="flex items-center gap-3">
//           <Link
//             href="/cart"
//             className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
//           >
//             <ShoppingCart size={20} /> Cart
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;




"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          Ali<span className="text-yellow-300">papa</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/products" className="hover:text-yellow-300 transition">Products</Link>

          {session ? (
            <>
              <Link href="/dash" className="hover:text-green-200 transition">Dashboard</Link>
              {/* Logged-in User Info */}
              <div className="flex items-center gap-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                )}
                <span className="hover:text-yellow-300 transition">{session.user?.name}</span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-400 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-yellow-300 transition">Login</Link>
              <Link href="/register" className="hover:text-red-500 transition">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 text-white flex flex-col gap-4 px-6 py-4">
          <Link
            href="/"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          {session ? (
            <>
              <Link
                href="/dash"
                className="hover:text-green-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                )}
                <span>{session.user?.name}</span>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setIsOpen(false);
                  }}
                  className="px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-400 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
