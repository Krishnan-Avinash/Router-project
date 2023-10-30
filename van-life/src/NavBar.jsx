import React from "react";
import "./styles/navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="left">#NavLife</div>
        <div className="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
