import React from "react";
import Navbar from "../components/Navbar";

const Search = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gray-100">
      
      {/* Search Content */}
      <div className="relative z-20 flex flex-col items-center justify-center mt-32 px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">
          Search
        </h1>
        <input
          type="text"
          placeholder="Type your search..."
          className="w-full max-w-md p-3 rounded-lg shadow-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </div>
  );
};

export default Search;
