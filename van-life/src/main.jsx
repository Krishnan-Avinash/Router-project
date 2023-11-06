import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Vans from "./Vans.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SelectedVan from "./SelectedVan.jsx";
import Layout from "./Layout.jsx";
import Host from "./Host.jsx";
import Income from "./income.jsx";
import Reviews from "./reviews.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<SelectedVan />} />
        <Route path="/host" element={<Host />}>
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
