"use client";

import React from "react";
import { useSession } from "next-auth/react"; // NextAuth hook to get current user session
import { useFavorites } from "../context/FavoritesContext";
import { toast } from "react-hot-toast";
import Link from "next/link"; // Next.js routing for View Details link

const MovieCard = ({ movie }) => {
  const { data: session } = useSession(); // Get current session
  const { toggleFavorite, isFavorite } = useFavorites(); // Get favorites functions and current state

  // Handle the add/remove favorite logic when button is clicked
  const handleToggleFavorite = () => {
    if (!session) {
      // If user not signed in, show error toast and exit
      toast.error("You must be signed in to add/remove favorites!");
      return;
    }

    // Check whether the movie is already in favorites before toggling
    const wasFavorite = isFavorite(movie);
    toggleFavorite(movie); // Toggle the favorite state

    // Show toast message based on prior state
    if (wasFavorite) {
      toast.error("Removed from favorites");
    } else {
      toast.success("Added to favorites!");
    }
  };

  return (
    <div className="bg-card p-4 rounded shadow text-center transition-transform duration-300 hover:scale-105">
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded mb-2"
      />

      {/* Movie Title */}
      <h3 className="text-sm font-medium text-light">{movie.title}</h3>
      <p className="text-xs text-gray-400">{movie.release_date}</p>

      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mt-3">
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="text-3xl transition-transform duration-300 hover:scale-125"
        >
          {isFavorite(movie) ? "💔" : "❤️"}
        </button>

        {/* View Details Link */}
        <Link
          href={`/movie/${movie.id}`}
          className="text-md text-accent hover:bg-accent hover:text-white transition-colors duration-300 rounded p-2 shadow-sm "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
