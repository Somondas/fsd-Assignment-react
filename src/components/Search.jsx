import React from "react";

const Search = () => {
  return (
    <div class=" text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white rounded-sm  h-10 px-2 border border-b-gray-700  text-lg focus:outline-none"
      />
    </div>
  );
};

export default Search;
