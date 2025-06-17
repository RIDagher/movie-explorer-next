import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
// MovieCard component to be in different pages
const MovieCard = ({ movie }) => {
  const [favorites, setFavorites] = useState([]);

  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div
      className="bg-card p-4 rounded shadow text-center transition-transform duration-500 hover:scale-105 pointer-events-auto

pointer-events: "
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded mb-2 "
      />
      <h3 className="text-md font-medium text-light">{movie.title}</h3>
      <p className="text-xs text-gray-400">{movie.release_date}</p>
      {/* Link used to navigate to MovieDetail page with passing movieId */}
      <Link
        href={`/movie/${movie.id}`}
        className="inline-block mt-2 text-accent text-sm hover:underline"
      >
        View Details
      </Link>
      <button
        onClick={() => toggleFavorite(movie)}
        className=" text-white m-4 text-3xl rounded mt-6 hover:bg-red-700 transition"
      >
        {isFavorite(movie) ? "💔" : "❤️"}
      </button>
    </div>
  );
};

export default MovieCard;
