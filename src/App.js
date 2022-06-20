import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Video from './Components/Video.js';
import About from "./Components/About.js"
import './App.css';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
