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
import HostLayout from "./HostLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<SelectedVan />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Host />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
