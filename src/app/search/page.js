"use client";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import MovieSection from "../components/MovieSection";
import useUnifiedSearch from "../hooks/useUnifiedSearch";
import usePopularMovies from "../hooks/usePopularMovies";
// import SearchFilters from "../components/SearchFilters";
import SearchFilters from "../components/SearchFilters";

export default function SearchPage() {
  const {
    formValues,
    setFormValues,
    queryParams,
    setQueryParams,
    results,
    totalPages,
    loading,
    applyFilters,
    updatePage,
  } = useUnifiedSearch();

  const { popularMovies, loadingPopular } = usePopularMovies();

  const handleReset = () => {
    setFormValues({ query: "", year: "", genre: "", language: "" });
    setQueryParams({ query: "", year: "", genre: "", language: "", page: 1 });
  };

  return (
    // Main Section
    <main className="space-y-12">
      {loading || loadingPopular ? (
        <p className="text-light text-center p-6">Loading...</p>
      ) : (
        <>
          <SearchBar formValues={formValues} setFormValues={setFormValues} />
          <SearchFilters
            formValues={formValues}
            setFormValues={setFormValues}
          />

          <div className="flex justify-center space-x-4">
            <button
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded"
              onClick={applyFilters}
            >
              Discover
            </button>

            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {queryParams.query ||
          queryParams.year ||
          queryParams.genre ||
          queryParams.language ? (
            results.length === 0 ? (
              <p className="text-light text-center p-6">No movies found.</p>
            ) : (
              <>
                <div className="flex items-center justify-end">
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={queryParams.page}
                      totalPages={totalPages}
                      onPageChange={updatePage}
                    />
                  )}
                </div>

                <MovieSection title="Results " movies={results} />

                {totalPages > 1 && (
                  <Pagination
                    currentPage={queryParams.page}
                    totalPages={totalPages}
                    onPageChange={updatePage}
                  />
                )}
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
}
