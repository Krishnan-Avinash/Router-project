import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Host = () => {
  return (
    <div>
      <h1>Host page goes here</h1>
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default Host;
