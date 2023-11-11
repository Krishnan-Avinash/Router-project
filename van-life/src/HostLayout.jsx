import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./styles/host_nav.css";
const HostLayout = () => {
  return (
    <>
      <div className="nav-bar-host">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "selected-link" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "selected-link" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "selected-link" : null)}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
