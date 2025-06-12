import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

import {
  searchMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "../services/movieApi";

const Home = () => {

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const trending = await fetchTrendingMovies();
        const topRated = await fetchTopRatedMovies();
        const nowPlaying = await fetchNowPlayingMovies();

        setTrendingMovies(trending || []);
        setTopRatedMovies(topRated || []);
        setNowPlayingMovies(nowPlaying || []);
        console.log("Trending:", trending);
        console.log("Top Rated:", topRated);
        console.log("Now Playing:", nowPlaying);
      } catch (err) {
        console.error("Error loading movies:", err);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch = async(term) => {
    setSearchTerm(term);
    setLoading(true);
    try {
      const data = await searchMovies(term);
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
        return <p className="text-light text-center p-6">Loading...</p>;
  }

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-12">
      <SearchBar onSubmit={handleSearch} />

      {/* If search term exists, show search results </div> */}
      {searchTerm && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}

      {!searchTerm && (
        <>
          {/* Trending Movies Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-accent">
              Trending Movies
            </h2>
            {/* Render Trending movies */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {trendingMovies
                .filter((movie) => movie.poster_path)
                .slice(0, 8)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </section>
          {/* Top Rated Movies Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-accent">
              Top Rated Movies
            </h2>
            {/* Render Top Rated movies */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topRatedMovies
                .filter((movie) => movie.poster_path)
                .slice(0, 8)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </section>
          {/* Now Playing Movies Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-accent">
              Now Playing Movies
            </h2>
            {/* Render Now Playing movies */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nowPlayingMovies
                .filter((movie) => movie.poster_path)
                .slice(0, 8)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </section>
        </>
      )}

      
    </main>
  );
};

export default Home;
