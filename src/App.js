import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import VideoSearch from './components/VideoSearch';
import Video from './components/Video';
import About from "./components/About"
import NotFound from './components/NotFound';
import Modal from 'react-modal/lib/components/Modal';

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
