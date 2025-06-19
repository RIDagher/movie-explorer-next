"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Next.js hook for client-side params
import { useFavorites } from "../../context/FavoritesContext";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// Fetch detailed movie data using the ID from route params

export default function MovieDetailPage() {
  // Extract dynamic movie ID from route params
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  // Access global favorites context
  const { toggleFavorite, isFavorite } = useFavorites();

  // Get authentication session info
  const { data: session } = useSession();

  //  Handle Add/Remove Favorites with authentication check
  const handleAddToFavorite = () => {
    const wasFavorite = isFavorite(movie);

    if (!session) {
      toast.error("You must be signed in to add/remove favorites!");
      return;
    }

    toggleFavorite(movie);

    if (wasFavorite) {
      toast.error("Removed from favorites");
    } else {
      toast.success("Added to favorites!");
    }
  };

  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.error("Fetch Error", err);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (!movie) return <p className="text-center p-6 text-light">Loading...</p>;

  return (
    <div className="text-light bg-dark min-h-screen">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-[400px] flex items-end px-10 py-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-4 rounded w-full text-center">
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <p className="text-lg">NOW AVAILABLE ON DIGITAL AND BLU-RAY™</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        {/* Poster */}
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
            className="rounded shadow"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <button
            onClick={handleAddToFavorite}
            className="text-3xl transition-transform duration-300 hover:scale-125"
          >
            {isFavorite(movie) ? "💔" : "❤️ "}
          </button>
          <p className="mb-2">
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
          <p className="mb-2">
            <strong>Runtime:</strong> {movie.runtime} min
          </p>
          <p className="mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="mb-2">
            <strong>Genres: </strong>
            {movie.genres && movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">{movie.overview}</p>
          {movie.production_companies && (
            <p className="mt-4">
              <strong>Production: </strong>
              {movie.production_companies &&
                movie.production_companies.map((p) => p.name).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
