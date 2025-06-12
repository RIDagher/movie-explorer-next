import React from "react";
import { Link } from "react-router-dom"; // react-router is the core library and react-router-dom is the DOM bindings 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl">Movie Explorer</h1>
      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-accent transition">
          Home
        </Link>
        {/* <Link to="/search" className="hover:text-accent transition">
          Search
        </Link> */}
        <Link to="/about" className="hover:text-accent transition">
          About
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
