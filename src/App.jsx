import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from './components/Experience';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from './components/Contacts';
import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(()=> {
    Aos.init();
  },[])
  return (
    <>
      <Navbar />
      <div className="container skills my-3 ">
        <Home />
        <Experience/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
    </>
  );
};

export default App;
