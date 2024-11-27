import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import { raj } from "./Data/Data";
import Summery from "./Component/Summery";

function App() {
   return (
      <div>
         <Navbar name={raj.name} />
         <Summery bio={raj.bio} />
         <Skill skills={raj.skills} />
         <Project projects={raj.projects} />
         <Footer address={raj.address} />
      </div>
   );
}

export default App;
