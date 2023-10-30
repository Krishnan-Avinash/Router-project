import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Vans from "./Vans.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import SelectedVan from "./SelectedVan.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/selectedvan" element={<SelectedVan />} />
    </Routes>
  </BrowserRouter>
);
