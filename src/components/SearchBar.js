import React from 'react'

export const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = React.useState("");
  
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onSubmit(term);
  };

  return (
    <div className="border border-grey-500 rounded px-4 py-2 flex flex-col">
      <form onSubmit={handleFormSubmit}>
        <input className=" text-black" type="text" placeholder="Search..." value={term} onChange={handleChange} />
        <button type="submit"> Search</button>
      </form>
      
    </div>
  )
}

export default SearchBar
