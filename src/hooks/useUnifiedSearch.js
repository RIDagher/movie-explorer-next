import { searchMovies, discoverMovies } from "../services/movieApi";
import { useState, useEffect } from "react";

const useUnifiedSearch = () => {
  // Separate form state (not triggering API on change)
  const [formValues, setFormValues] = useState({
    query: "",
    year: "",
    genre: "",
    language: "",
  });

  // Actual query parameters for API request
  const [queryParams, setQueryParams] = useState({
    query: "",
    year: "",
    genre: "",
    language: "",
    page: 1,
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  // API fetch triggered only when queryParams change
  useEffect(() => {
    // Don't trigger search if no search params
    if (
      !queryParams.query &&
      !queryParams.year &&
      !queryParams.genre &&
      !queryParams.language
    ) {
      return;
    }
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let data;

        if (queryParams.query) {
          // full text search first
          data = await searchMovies(queryParams.query, queryParams.page);
          let filteredResults = data.results;

          // Apply filters locally on top of search results
          if (queryParams.year) {
            filteredResults = filteredResults.filter((movie) =>
              movie.release_date?.startsWith(queryParams.year)
            );
          }
          if (queryParams.genre) {
            filteredResults = filteredResults.filter((movie) =>
              movie.genre_ids.includes(parseInt(queryParams.genre))
            );
          }
          if (queryParams.language) {
            filteredResults = filteredResults.filter(
              (movie) => movie.original_language === queryParams.language
            );
          }

          setResults(filteredResults);
          setTotalPages(1); // no pagination after Local filtering
          return;
        } else {
          // if no query: normal discover filtering
          const data = await discoverMovies(queryParams);
          setResults(data.results);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        console.error("Error fetching movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [queryParams]);

  // Apply filters when user clicks Discover button
  const applyFilters = () => {
    setQueryParams({
      ...formValues,
      page: 1, // reset page when filters change
    });
  };

  // Handle pagination
  const updatePage = (newPage) => {
    setQueryParams((prevFilters) => ({
      ...prevFilters,
      page: newPage,
    }));
  };

  return {
    formValues,
    setFormValues,
    queryParams,
    setQueryParams,
    results,
    loading,
    totalPages,
    applyFilters,
    updatePage,
  };
};

export default useUnifiedSearch;
