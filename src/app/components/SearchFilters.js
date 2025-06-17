const SearchFilters = ({ formValues, setFormValues }) => {
  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex justify-center my-4 space-x-4">
      <input
        className=" text-black flex-grow border border-grey-500 rounded px-4 py-2"
        type="text"
        placeholder="Year"
        value={formValues.year}
        onChange={(e) => handleChange("year", e.target.value)}
      />

      <select
        className="text-black flex-grow border border-grey-500 rounded px-4 py-2"
        name="genre"
        value={formValues.genre}
        onChange={(e) => handleChange("genre", e.target.value)}
      >
        {/* TODO: should be fetched from API */}
        <option value="">Genre</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="18">Drama</option>
      </select>

      <select
        className="text-black flex-grow border border-grey-500 rounded px-4 py-2"
        name="language"
        value={formValues.language}
        onChange={(e) => handleChange("language", e.target.value)}
      >
        {/* TODO: should be fetched from API */}
        <option value="">Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

export default SearchFilters;
