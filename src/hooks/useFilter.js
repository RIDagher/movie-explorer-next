import { useState } from "react";

// This is the custom hook to manage the filter logic
const useFilter = () => {
  const [filters, setFilters] = useState({
    year: "",
    genre: "",
    language: "",
  });

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const resetFilters = () => {
    setFilters({
      year: "",
      genre: "",
      language: "",
    });
  };

  return { filters, updateFilters, resetFilters };
};

export default useFilter;
