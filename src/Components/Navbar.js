import React from "react";
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"

function Navbar () {
  return (
    <div className="Navbar">
      <span>Youtube</span>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;