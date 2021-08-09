
import React from "react";
import Navbar from "./components/navbar";
import Routes from "./router";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";


export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>  
   </Provider>
  );
}
