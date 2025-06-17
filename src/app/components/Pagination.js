import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange}) => {
  return (
    <div className = "flex justify-center my-4 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage-1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:text-accent transition"
      >
        Previous
      </button>  

      <span className="px-4 py-2 text-light">
        Page {currentPage} of {totalPages}  
      </span>    

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage+1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:text-accent transition"
      >
        Next
      </button> 
    </div>
  )
}

export default Pagination
