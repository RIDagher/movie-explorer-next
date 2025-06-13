// This is the custom hook to manage the search logic
import { useState } from "react";
import { searchMovies } from "../services/movieApi";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    year: "",
    month: "",
    genre: "",
    language: "",
  });

  const [loading, setLoading] = useState(false);

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

  return {
    searchTerm,
    searchResults,
    currentPage,
    totalPages,
    filters,
    loading,
    handleSearch,
    handlePageChange,
  };
};

export default useSearch;
