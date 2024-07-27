import React from "react";
import { MaterialSymbol } from "react-material-symbols";

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form className="w-full max-w-xl">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        ></label>
        <div className="relative flex items-center text-dark border-b focus:border-b-2 focus:border-green-300">
          <MaterialSymbol icon="search" color="#495955" size={24} />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm bg-transparent border-gray-300 focus:ring-0 focus:outline-none focus:shadow-none"
            onChange={handleInputChange} // Handle input change
            required
          />
          <button
            type="submit"
            className="text-gray-500 absolute end-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
