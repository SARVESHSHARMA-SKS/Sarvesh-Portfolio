import React from "react";
import { Navbar } from "./Navbar"
import About from "./About";
import Projects from "./Project";
import { useRef } from 'react';
import TechStack from "./TechStack"
import Pictures from "./pictures"
function Routes() {
    const Home = useRef();
    const AboutRef = useRef();
    const ProjectsRef = useRef();
    const TechStackRef = useRef();
    function handleClick(element) {
        if (element === "Home") {
 Home.current.scrollIntoView({ behavior: 'smooth' });
     }
        if (element === "About") {
            AboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (element === "Projects") {
            ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (element === "TechStack") {
            TechStackRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        
        <div>
            <div >
                 <button onClick={()=>{handleClick("Home")}}>Home</button>
                <button onClick={()=>{handleClick("About")}}>About</button>
                <button onClick={()=>{handleClick("Projects")}}>Projects</button>
                <button onClick={()=>{handleClick("TechStack")}}>TechStack</button>
            </div>
            <div ref={Home}>
          <Pictures/>
        </div> 
        <div ref={AboutRef}>
          <About/>
        </div>
        <div ref={ ProjectsRef}>
           <Projects/>
        </div>
        <div ref={ TechStackRef}>
           <TechStack/>
        </div>
            
        </div>
    );
}
export {Routes};