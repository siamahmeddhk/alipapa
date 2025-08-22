"use client";

import { SessionProvider } from "next-auth/react";
import Nav from "./Nav"; // your existing Nav component

const NavClient = () => {
  return (
    <SessionProvider>
      <Nav />
    </SessionProvider>
  );
};

export default NavClient;
