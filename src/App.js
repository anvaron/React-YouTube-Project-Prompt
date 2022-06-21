import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import About from "./Components/About.js"
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
