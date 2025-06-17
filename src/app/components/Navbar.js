import React from "react";
import Link from "next/link"; // react-router is the core library and react-router-dom is the DOM bindings

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md px-6 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <h1 className="text-white font-bold text-xl tracking-wide">
          🎬 MovieExplorer
        </h1>
      </div>
      {/* <h1 className="text-xl font-semibold text-white">Movie Explorer</h1> */}

      <div className="space-x-6 text-sm">
        <Link href="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link href="/search" className="hover:text-accent transition">
          Search
        </Link>
        {/* <Link to="/about" className="hover:text-accent transition">
          About
        </Link> */}
        <Link href="/favorites" className="hover:text-accent transition">
          Favorites
        </Link>
        <Link href="/login" className="hover:text-accent transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
