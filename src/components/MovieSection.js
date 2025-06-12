import MovieCard from "./MovieCard";

const MovieSection = ({ title, movies }) => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-accent">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {movies
            .filter((movie) => movie.poster_path)
            .slice(0, 8)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default MovieSection;
