import React from "react";
import { Link } from "react-scroll";
function Navbar({ name }) {
   return (
      <header id="Navbar" className="p-4 bg-gray-800 text-white flex justify-between items-center">
         <nav className="flex space-x-4">
            <Link to="Navbar" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">
               {name}
            </Link>
            <Link to="Skill" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">
               Skill
            </Link>
            <Link to="Project" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">
               Project
            </Link>
         </nav>
      </header>
   );
}
export default Navbar;
