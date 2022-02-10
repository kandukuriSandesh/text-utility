import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "dark"){
      setMode("white");
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
    }
    else{
      setMode("dark");
      document.body.style.color = "white"
      document.body.style.backgroundColor = "#848484"
    }
    
  }
  return (
  <>
    <Navbar name ="TextUtility" mode={mode} toggleMode={toggleMode}  > TextUtility</Navbar>
    <div className="container">
    <TextForm mode={mode} ></TextForm>
    {/* <About/> */}
    </div>
    
  </>
  );
}

export default App;



