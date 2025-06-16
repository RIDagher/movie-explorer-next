export const SearchBar = ({ formValues, setFormValues }) => {
  const handleChange = (event) => {
    setFormValues((prev) => ({ ...prev, query: event.target.value }));
  };

  return (
    <div>
      <input
        className=" text-black flex-grow border border-grey-500 rounded px-4 py-2"
        type="text"
        placeholder="Search..."
        value={formValues.query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
