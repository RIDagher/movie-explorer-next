import MovieCard from "./MovieCard";

const MovieSection = ({ title, movies, limit }) => {
  const displayedMovies = limit ? movies.slice(0, limit) : movies;
  return (
    <div>
      <section>
        <h2 className="text-2xl md:text-3xl  font-semibold mb-4 text-accent">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {displayedMovies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default MovieSection;
