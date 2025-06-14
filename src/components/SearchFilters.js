const SearchFilters = ({
  filters,
  updateFilters,
  resetFilters,
  onApplyFilters,
}) => {
  return (
    <div className="flex justify-center my-4 space-x-4">
      <input
        className=" text-black flex-grow border border-grey-500 rounded px-4 py-2"
        type="text"
        placeholder="Year"
        value={filters.year}
        onChange={(e) => updateFilters({ year: e.target.value })}
      />

      <select
        className="text-black flex-grow border border-grey-500 rounded px-4 py-2"
        name="genre"
        value={filters.genre}
        onChange={(e) => updateFilters({ genre: e.target.value })}
      >
        <option value="">Genre</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>

      <select
        className="text-black flex-grow border border-grey-500 rounded px-4 py-2"
        name="language"
        value={filters.language}
        onChange={(e) => updateFilters({ language: e.target.value })}
      >
        <option value="">Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="zh">Chinese</option>
      </select>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onApplyFilters}
      >
        Apply Filters
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default SearchFilters;
