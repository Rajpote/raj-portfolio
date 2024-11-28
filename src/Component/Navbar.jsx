import React from "react";
import { Link } from "react-scroll";
import Summery from "./Summery";
function Navbar({ name, bio, image }) {
   return (
      <>
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
         <main className="flex justify-center items-center h-{100vh}">
            <Summery bio={bio} />
            <img src="./Raj-pote.jpg" alt="Raj Pote" className="h-1/2 w-1/2 rounded-full" />
         </main>
      </>
   );
}
export default Navbar;
