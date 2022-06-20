import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <span>Youtube</span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Navbar;