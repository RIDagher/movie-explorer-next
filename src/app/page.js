"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "./services/movieApi";
// import MovieSection from "../components/MovieSection";
import MovieSection from "./components/MovieSection";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const heroMovie = trendingMovies[0];

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
        // console.log("Trending:", trending);
        // console.log("Top Rated:", topRated);
        // console.log("Now Playing:", nowPlaying);
      } catch (err) {
        console.error("Error loading movies:", err);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-12">
      <>
        <div
          className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-start text-white px-10"
          style={{
            backgroundImage: heroMovie?.backdrop_path
              ? `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`
              : "none",
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to MovieExplorer</h1>
          <p className="text-lg max-w-xl">
            Discover the latest trending films, search by mood, and save your
            favorites.
          </p>
          <Link
            href="/search"
            className="mt-4 px-6 py-3 bg-accent text-white rounded hover:bg-accent-dark transition"
          >
            Start Exploring
          </Link>
        </div>
        {loading ? (
          <p className="text-light text-center p-6">Loading...</p>
        ) : (
          <>
            <MovieSection title="Trending" movies={trendingMovies} limit={4} />
            {/* <MovieSection title="Top Rated" movies={topRatedMovies} limit={8} />
              <MovieSection
                title="Now Playing"
                movies={nowPlayingMovies}
                limit={8}
              /> */}
          </>
        )}
      </>
    </main>
  );
}
