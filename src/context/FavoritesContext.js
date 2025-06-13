import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favCount, setFavCount] = useState(0);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // set favorites to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavCount(favorites.length);
  }, [favorites]);

  // Check if a movie is already in favorites
  const isFavorite = (movie) => favorites.some((m) => m.id === movie.id);

  // Toggle favorite, add if not in list, remove if already added
  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      // Remove the movie from favorites
      setFavorites((prev) => prev.filter((m) => m.id !== movie.id));
    } else {
      // Add the movie to favorites
      setFavorites((prev) => [...prev, movie]);
    }
  };

  // Total number of favorite movies
  // const favCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        favCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
