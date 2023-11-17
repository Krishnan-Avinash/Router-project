import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../../styles/nested-page.css";

const Pricing = () => {
  const { van } = useOutletContext();
  return (
    <div className="nested-main-page">
      <h1>Pricing goes here</h1>
      <h2>${van.price}/day</h2>
    </div>
  );
};

export default Pricing;
