import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { searchMovies, fetchPopularMovies } from "../services/movieApi";
import MovieSection from "../components/MovieSection";

const Search = () => {
  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [popularMovies, setPopularMovies] = useState([]);

  const [filters, setFilters] = useState({
    year: "",
    month: "",
    genre: "",
    language: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popular = await fetchPopularMovies();
        setPopularMovies(popular || []);
        console.log("Popular:", popular);
      } catch (err) {
        console.error("Error fetching popular movies:", err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (term, page = 1) => {
    setSearchTerm(term);
    setLoading(true);
    setCurrentPage(page);
    try {
      const data = await searchMovies(term, page);
      setSearchResults(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching movies", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    handleSearch(searchTerm, page);
  };

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-6">
      <SearchBar classname="" onSubmit={(term) => handleSearch(term, 1)} />

      {loading ? (
        <p className="text-light text-center p-6">Loading...</p>
      ) : (
        <>
          {searchTerm ? (
            searchResults.length === 0 ? (
              <p className="text-light text-center p-6">No movies found.</p>
            ) : (
              <>
                <div className="flex items-center justify-end">
                  {/* <h2 className="text-xl font-semibold mb-4 text-accent">
                    Search Results for "{searchTerm}"
                  </h2> */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
                <MovieSection title="Search Results" movies={searchResults} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )
          ) : (
            <MovieSection
              title="Popular Movies"
              movies={popularMovies}
              limit={8}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Search;
