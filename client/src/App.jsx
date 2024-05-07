// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Canvas from "./Canvas";
import Customizer from "./pages/Customizer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="app transition-all ease-in">
        <Routes>
          <Route path="/" element={<HomeWithCanvasAndCustomizer />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
};

const HomeWithCanvasAndCustomizer = () => {
  return (
    <>
      <Home />
      <Canvas />
      <Customizer />
    </>
  );
};

export default App;
