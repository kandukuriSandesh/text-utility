import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("white");
  
  const [alert, setAlert] = useState("");

  const [backG, setbackG] = useState("");

  const showAlert = (message,type) => {
    setAlert({
     msg:message,
     status:type
    })
    setTimeout(() => {
      setAlert("")
    }, 2000);

  }

  const toggleBG = (color) => {
    setbackG(color);
    console.log(color);
  }

 

  const toggleMode = (e) => {
    if(mode === "dark"){
      setMode("white");
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white";
      showAlert(" Light Shade has been Enabled..!","success")
    }
    else{
      if(backG === ""){
      showAlert(" Please select any shade","danger");
        e.preventDefault();
      }else{
      setMode("dark");
      document.body.style.color = "white"
      
      document.body.style.backgroundColor = backG;
      showAlert(" Dark Shade has been Enabled..!","success");
      }
    }
    
  }
  return (
  <> 
  <Router>
    <Navbar name ="TextUtility" mode={mode} toggleMode={toggleMode} toggleBG={toggleBG}  > TextUtility</Navbar>
    <div className="" style={{height:"50px"}} >{alert? <Alert alert = {alert} /> :""}</div>
    <Routes>
     <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} ></Route>
    <Route path="/about" element={ <About mode = {mode} />} ></Route>
    </Routes>
    
  </Router>
  </>
  );
}

export default App;



