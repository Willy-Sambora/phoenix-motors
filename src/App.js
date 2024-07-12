import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import Home from "./Components/Home/Home";
import Luxury from "./Components/Luxury/Luxury";
import SUVS from "./Components/SUVs.jsx/SUVS";
import Trucks from "./Components/Trucks/Trucks";
import Sedans from "./Components/Sedans/Sedans"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Luxury />
      <Sedans />
      <SUVS />
      <Trucks />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
