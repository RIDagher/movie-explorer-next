import React from "react";
import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const [inputError, setInputError] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
    setInputError("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!term.trim()) {
      setInputError("Please enter a search term!");
      return;
    }
    console.log(term);
    setInputError("");
    onSubmit(term.trim());
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex gap-2">
        <input
          className=" text-black flex-grow border border-grey-500 rounded px-4 py-2"
          type="text"
          placeholder="Search..."
          value={term}
          onChange={handleChange}
        />
        <button
          className="px-4 py-2  bg-blue-500 text-white rounded hover:text-accent transition"
          type="submit"
        >
          Discover Movies
        </button>
      </form>

      {inputError && (
        <p className="text-red-500 text-lg font-semibold mt-1">{inputError}</p>
      )}
    </div>
  );
};

export default SearchBar;
