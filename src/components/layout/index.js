import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex gap-4 justify-center py-4 bg-slate-50 text-slate-900">
        <Link href={"/"}>Home</Link>
        <Link href={"/movies"}>Movies</Link>
        <Link href={"/airbnb"}>AirBnb</Link>
        <Link href={"/users"}>Users</Link>
      </nav>
      <main>{children}</main>
      <footer className="text-center py-4">© 2023 - Febriqgal😎</footer>
    </div>
  );
}
