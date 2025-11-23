import React, { useState } from "react";
import HeroImage from "../assets/images/heroimage.jpg";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center">
      
      <Navbar onSearchClick={handleSearchClick} />

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-600/50 z-10"></div>

     {showSearch && (
  <div className="absolute top-24 md:w-90 w-80 h-10 flex justify-center z-20">
    <div className="flex border border-white bg-black/80 max-w-xl w-full">
      <input
        type="text"
        placeholder="SEARCH..."
        className="flex-1 px-4 py-3 text-sm bg-transparent text-white placeholder-gray-300 focus:outline-none"
      />
      <button className="bg-green-500 px-4 py-3 text-white">
        <FaSearch/>
      </button>
    </div>
  </div>
)}
      <div className="relative z-20 text-center text-white px-4 mt-auto mb-auto">
        <h1 className="text-3xl md:text-4xl mb-4 ">
          <span className=" tracking-wide">We generate </span>
          <span className="font-[piazzolla]">new ways </span>
          <span className=" font-clash">of thinking about </span>
          <span className="md:block font-bold ">energy and culture.</span>
        </h1>
        <button className="bg-green-400 hover:bg-green-600 text-white uppercase text-sm px-3 py-1 font-semibold ">
          Latest Articles
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
