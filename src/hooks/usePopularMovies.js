import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/movieApi";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoadingPopular(true);
      try {
        const popular = await fetchPopularMovies();
        setPopularMovies(popular || []);
        console.log("Popular:", popular);
      } catch (err) {
        console.error("Error fetching popular movies:", err);
      } finally {
        setLoadingPopular(false);
      }
    };
    loadPopularMovies();
  }, []);

  return { popularMovies, loadingPopular };
};

export default usePopularMovies;
