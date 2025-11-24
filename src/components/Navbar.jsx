import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ onSearchClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-15 px-5 md:px-50 py-5 bg-black flex items-center font-extralight text-white relative z-30">
      
      <div className="hidden md:flex gap-5 text-base tracking-widest">
        <a href="#" className="text-green-300 uppercase ">home</a>
        <a href="#" className="hover:text-green-400 uppercase">about</a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      <div className="relative flex-1 flex justify-center items-center">
      <span className="absolute bg-[#50C77E] rounded-full left-1/2 top-1/2 transform -translate-x-[55%] -translate-y-1/2 w-[100px] h-[100px]"></span>
         <h1 className="text-4xl tracking-wider font-[Clash_Display] font-semibold text-center relative">
           Energy<span className="ml-2 font-light ">Humanities</span>
         </h1>
      </div>

      <div className="md:hidden">
        <FaSearch size={20} className="cursor-pointer" onClick={onSearchClick} />
      </div>

      <div className="hidden md:flex gap-5 text-base items-center tracking-widest font-extralight">
        <a href="#" className="uppercase">articles</a>
        <a href="#" className="uppercase">videos</a>
        <FaSearch className="w-4 h-4 cursor-pointer" onClick={onSearchClick} />
      </div>

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
