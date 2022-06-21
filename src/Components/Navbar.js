import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar () {
  return (
    <div className="Navbar">
      <span><Link to="/">Youtube</Link></span>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;