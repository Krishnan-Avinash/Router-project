import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
