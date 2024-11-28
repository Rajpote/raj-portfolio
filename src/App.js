import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import { raj } from "./Data/Data";

function App() {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar name={raj.name} bio={raj.bio} image={raj.image} />
         <hr />
         <Skill skills={raj.skills} />
         <hr />
         <Project projects={raj.projects} />
         <Footer address={raj.address} />
      </div>
   );
}

export default App;
