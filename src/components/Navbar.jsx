import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ onSearchClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-15 px-5 md:px-50 py-5 bg-black flex items-center text-white relative z-30">
      
      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 text-sm">
        <a href="#" className="text-green-300 uppercase">home</a>
        <a href="#" className="hover:text-green-400 uppercase">about</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Logo */}
      <div className="relative flex-1 flex justify-center items-center">
         <span className="absolute w-16 h-16 bg-green-400 rounded-full left-1/2 transform -translate-x-1/2"></span>
         <h1 className="text-3xl font-semibold text-center relative">
           Energy<span className="ml-2 font-[Piazzolla]">Humanities</span>
         </h1>
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden">
        <FaSearch size={20} className="cursor-pointer" onClick={onSearchClick} />
      </div>

      {/* Desktop Links + Search */}
      <div className="hidden md:flex gap-5 text-sm items-center">
        <a href="#" className="uppercase">articles</a>
        <a href="#" className="uppercase">videos</a>
        <FaSearch size={20} className="cursor-pointer" onClick={onSearchClick} />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-2 gap-4 md:hidden text-sm">
          <a href="#" className="text-green-300 uppercase">home</a>
          <a href="#" className="hover:text-green-400 uppercase">about</a>
          <a href="#" className="uppercase">articles</a>
          <a href="#" className="uppercase">videos</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
