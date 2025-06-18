import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center my-4 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="font-bold bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded"
      >
        Previous
      </button>

      <span className="px-4 py-2 text-light">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="font-bold bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
