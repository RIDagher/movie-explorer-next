"use client";

import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
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

  const value = {
    formValues,
    setFormValues,
    queryParams,
    setQueryParams,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
