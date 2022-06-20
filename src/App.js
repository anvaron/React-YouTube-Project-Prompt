import React from 'react';
import { Route, Routes, useParams } from "react-router-dom";

import Navbar from './components/Navbar';
import VideoSearch from './components/VideoSearch';
import VideoPlayer from './components/VideoPlayer';
import About from "./components/About"

import './App.css';

function App() {
  const videoId = useParams();

  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path="/" element={<VideoSearch />} />
        <Route path='/video/:videoId' element={<VideoPlayer id={videoId}/>}>
            {/* <div className="app__mainpage">
              <VideoPlayer />
            </div> */}
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
