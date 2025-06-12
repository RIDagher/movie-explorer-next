import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { searchMovies } from "../services/movieApi";

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  // Fetch trending movies to display on the homepage

  const [movies, setMovies] = useState([]);

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  // Fetch tredin movies to display on homepage
  const fetchMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
      console.log(data.results);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = async(term) => {
    setSearchTerm(term);
    setLoading(!loading);
    try {
      const data = await searchMovies(term);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Render fetched movies using the reusable MovieCard component
    <div className="p-4">
      <SearchBar onSubmit={handleSearch} />
      <h2 className="text-xl font-semibold mb-4 text-light">{searchTerm? `Search Results for "${searchTerm}"` : "Trending Movies"}</h2>
      {loading ? (
        <p className="text-light">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
