"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // NextAuth hooks for session & signOut
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  // Get current user session from NextAuth
  const { data: session } = useSession();
  const router = useRouter();

  // Handle sign out logic
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" }); // Sign out and redirect to login
    toast.success("Signed out successfully!"); // Show toast feedback
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md px-6 py-5 flex justify-between items-center">
      {/* App Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-white font-bold text-xl tracking-wide">
          🎬 MovieExplorer
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm">
        <Link href="/" className="hover:text-accent transition">
          Home
        </Link>
        <Link href="/search" className="hover:text-accent transition">
          Search
        </Link>
        <Link href="/favorites" className="hover:text-accent transition">
          Favorites
        </Link>

        {/* Conditional Login/Logout */}
        {session ? (
          <button
            onClick={handleSignOut}
            className="hover:text-red-400 transition"
          >
            Sign Out
          </button>
        ) : (
          <Link href="/login" className="hover:text-accent transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
