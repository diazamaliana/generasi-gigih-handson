
import React from "react";
import Navbar from "./components/navbar";
import Routes from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";


export default function App() {
  return (
    <div  className="App">
        <Router>
            <Navbar/>
            <Routes/>
        </Router>
    </div>
   
  );
}
