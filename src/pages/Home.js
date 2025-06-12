import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "../services/movieApi";

// const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  // Fetch trending movies to display on the homepage

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tredin movies to display on homepage
  // const fetchMovies = async () => {
  //   try {
  //     const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setMovies(data.results);
  //     setLoading(false);
  //     console.log(data.results);
  //   } catch (err) {
  //     console.error("Fetch error", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

  if (loading) {
    return <p className="text-light text-center p-6">Loading...</p>;
  }

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-12">
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
    </main>
  );
};

export default Home;
