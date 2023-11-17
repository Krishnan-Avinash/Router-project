import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./pages/MainPage/Home.jsx";
import About from "./pages/About/About.jsx";
import Vans from "./pages/VanPage/Vans.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SelectedVan from "./pages/MainPage/SelectedVan.jsx";
import Layout from "./pages/MainPage/Layout.jsx";
import Host from "./pages/Host/Host.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import NestedSelectedVan from "./pages/Host/NestedSelectedVan.jsx";
import Details from "./pages/Host/WithinHost/Details.jsx";
import Pricing from "./pages/Host/WithinHost/Pricing.jsx";
import Photos from "./pages/Host/WithinHost/Photos.jsx";

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
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<NestedSelectedVan />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
