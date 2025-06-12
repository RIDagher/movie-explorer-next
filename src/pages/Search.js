import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import {searchMovies} from "../services/movieApi";


const Home = () => {

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleSearch = async(term, page = 1) => {
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
  }

  const handlePageChange = (page) => {
    handleSearch(searchTerm, page);
  };

  if (loading) {
        return <p className="text-light text-center p-6">Loading...</p>;
  }

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-12">
      <SearchBar classname="" onSubmit={(term) => handleSearch(term, 1)} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      {searchResults.length > 0 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default Home;
