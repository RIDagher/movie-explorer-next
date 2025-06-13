import React, { useEffect } from "react";
import { useState } from "react";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "../services/movieApi";
import MovieSection from "../components/MovieSection";

const Home = () => {
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

  if (loading) {
    return <p className="text-light text-center p-6">Loading...</p>;
  }

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-12">
      <>
        {loading ? (
          <p className="text-light text-center p-6">Loading...</p>
        ) : (
          <>
            <MovieSection title="Trending" movies={trendingMovies} limit={8} />
            <MovieSection title="Top Rated" movies={topRatedMovies} limit={8} />
            <MovieSection
              title="Now Playing"
              movies={nowPlayingMovies}
              limit={8}
            />
          </>
        )}
      </>
    </main>
  );
};

export default Home;
