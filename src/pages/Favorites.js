import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

import MovieSection from "../components/MovieSection";

const Favorites = () => {
  // List of saved MOvies
  const { toggleFavorite, isFavorite, favorites } = useFavorites();

  return (
    // Added main with Top padding so it doesn't hide behind nav
    <main className="pt-24 p-6 space-y-12">
      <MovieSection title="Your Favorites" movies={favorites} />
    </main>
  );
};

export default Favorites;
