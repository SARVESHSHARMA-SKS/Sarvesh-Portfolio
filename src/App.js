import React from "react"
import './App.css';
import BasicInfo from "./components/Basic_info"
import About from "./components/About";
import Pictures from "./components/pictures";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
// import Proficiencies from "./components/Proficiencies";
import GitStatus from "./components/GitStatus"
function App() {
  return (
    <div className="App">
      <Pictures />
      <BasicInfo />
      <About />
      <TechStack />
      <Projects />
      {/* <Proficiencies /> */}
      <GitStatus/>
      {/* <br /> */}
      <Contact/>
     
      
    </div>
  );
}

export default App;
