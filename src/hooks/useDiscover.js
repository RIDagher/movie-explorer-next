import { discoverMovies } from "../services/movieApi";
import { useState } from "react";

const useDiscover = () => {
  const [discoverResults, setDiscoverResults] = useState([]);
  const [discoverLoading, setDiscoverLoading] = useState(false);
  const [discoverCurrentPage, setDiscoverCurrentPage] = useState(1);
  const [discoverTotalPages, setDiscoverTotalPages] = useState(1);

  const handleDiscover = async (filters, page = 1) => {
    setDiscoverLoading(true);
    setDiscoverCurrentPage(page);
    const data = await discoverMovies(filters, page);
    setDiscoverResults(data.results);
    setDiscoverTotalPages(data.total_pages);
    setDiscoverLoading(false);
  };

  const handleDiscoverPageChange = (page, filters) => {
    handleDiscover(filters, page);
  };

  return {
    discoverResults,
    discoverLoading,
    discoverCurrentPage,
    discoverTotalPages,
    handleDiscover,
    handleDiscoverPageChange,
  };
};

export default useDiscover;
