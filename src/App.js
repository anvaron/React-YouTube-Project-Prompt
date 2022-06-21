import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import VideoSearch from "./Components/VideoSearch";
import Video from "./Components/Video";
import About from "./Components/About"
import NotFound from "./Components/NotFound";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoSearch />} />
        <Route path='/videos/:videoId' element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
