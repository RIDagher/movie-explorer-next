import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import MovieSection from "../components/MovieSection";
import useSearch from "../hooks/useSearch";
import usePopularMovies from "../hooks/usePopularMovies";
import useFilter from "../hooks/useFilter";
import SearchFilters from "../components/SearchFilters";
import useDiscover from "../hooks/useDiscover";

const Search = () => {
  const {
    searchTerm,
    searchResults,
    currentPage,
    totalPages,
    loading,
    handleSearch,
    handlePageChange,
  } = useSearch();

  const { popularMovies, loadingPopular } = usePopularMovies();

  const { filters, updateFilters, resetFilters } = useFilter();

  const {
    discoverResults,
    discoverLoading,
    discoverCurrentPage,
    discoverTotalPages,
    handleDiscover,
  } = useDiscover();

  const handleApplyFilters = () => {
    handleDiscover(filters, 1);
  };

  return (
    // Main Section
    <main className="pt-24 p-6 space-y-6">
      {loading || loadingPopular || discoverLoading ? (
        <p className="text-light text-center p-6">Loading...</p>
      ) : (
        <>
          <SearchBar onSubmit={(term) => handleSearch(term, 1)} />
          <SearchFilters
            filters={filters}
            updateFilters={updateFilters}
            resetFilters={resetFilters}
            onApplyFilters={handleApplyFilters}
          />

          {/* Discover results */}
          {discoverResults.length > 0 ? (
            <>
              <MovieSection title="Filtered results" movies={discoverResults} />
              <Pagination
                currentPage={discoverCurrentPage}
                totalPages={discoverTotalPages}
                onPageChange={(page) => handleDiscover(page, filters)}
              />
            </>
          ) : // Text search results
          searchTerm ? (
            searchResults.length === 0 ? (
              <p className="text-light text-center p-6">No movies found.</p>
            ) : (
              <>
                <div className="flex items-center justify-end">
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
            <>
              <MovieSection
                title="Popular Movies"
                movies={popularMovies}
                limit={8}
              />
            </>
          )}
        </>
      )}
    </main>
  );
};

export default Search;
