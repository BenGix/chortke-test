import React from "react";
import { MaterialSymbol } from "react-material-symbols";

export const SearchBar = () => {
  return (
    <div>
      <form className="max-w-xl ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        ></label>
        <div className="relative flex items-center  text-dark border-b focus:border-b-2 focus:border-green-300 ">
          <MaterialSymbol icon="search" color="#313131" size={24} />
          <div className="absolut  inset-y-0 start-0 flex items-center pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10  text-sm bg-transparent border-gray-300 focus:ring-0 focus:outline-none focus:shadow-none focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <button
            type="submit"
            className="text-dark absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
