import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Video from './components/Video';
import About from "./components/About"

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
