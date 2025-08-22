import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// NextAuth configuration
export const authOptions = {
  providers: [
    // 🔹 Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔹 Email/Password (Credentials)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Here you check the user against your database
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "123456"
        ) {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        return null; // ❌ Login failed
      },
    }),
  ],
  session: {
    strategy: "jwt", // Store session in JWT (no DB needed unless you want it)
  },
};

// Create API handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
