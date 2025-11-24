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
              <FaSearch />
            </button>
          </div>
        </div>
      )}
      <div className="relative z-20 text-left text-white mx-auto mt-auto mb-auto px-4 w-full max-w-[800px]">
        <h1 className="text-3xl md:text-5xl mb-7 leading-snug">
          <span className="font-[Clash_Display]">
            We generate
            <span className="font-[Piazzolla] italic font-[oblique_10deg]">
              {" "}
              new ways
            </span>{" "}
            of
          </span>
          <br />
          <span className="font-[Clash_Display]">thinking absolute
          <span className="md:block text-6xl font-medium font-[Clash_Display] tracking-wider">
            energy and culture.
          </span>
          </span>
        </h1>
        <button className="bg-[#50C77E] tracking-widest hover:bg-green-600 text-white uppercase font-[Clash_Display] text-sm px-6 py-3 font-light">
          Latest Articles
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
