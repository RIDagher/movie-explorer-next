import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-card shadow-md">
      <h1 className="text-xl">Movie Explorer</h1>
      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link to="/search" className="hover:text-accent transition">
          Search
        </Link>
        <Link to="/favorites" className="hover:text-accent transition">
          Favorites
        </Link>
        <Link to="/login" className="hover:text-accent transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
