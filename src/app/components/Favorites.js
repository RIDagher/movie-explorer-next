"use client";
import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

import MovieSection from "./MovieSection";

const Favorites = () => {
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  return (
    <div>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          You haven’t added any favorites yet.
        </p>
      ) : (
        <MovieSection title="Your Favorites" movies={favorites} />
      )}
    </div>
  );
};

export default Favorites;
