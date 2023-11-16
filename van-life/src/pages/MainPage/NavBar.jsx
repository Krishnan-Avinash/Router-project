import React from "react";
import "../../styles/navbar.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="left">#VanLife</div>
        <div className="right">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "main-layout-selected-link" : null
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? "main-layout-selected-link" : null
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "main-layout-selected-link" : null
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? "main-layout-selected-link" : null
            }
          >
            Vans
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
