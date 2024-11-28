import React from "react";
import { Link } from "react-scroll";
import Summery from "./Summery";
function Navbar({ name, bio, image }) {
   return (
      <>
         <header id="Navbar" className="bg-black text-white p-4 flex justify-center items-center">
            <nav className="space-x-4">
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
         <main className="flex justify-center items-center bg-gray-500 text-white py-20 gap-4">
            <Summery bio={bio} />
            <div className="w-1/2 flex justify-center items-center">
               <img src="./Raj-pote.jpg" alt="Raj Pote" className="h-1/2 w-1/2 rounded-full" />
            </div>
         </main>
      </>
   );
}
export default Navbar;
