import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../../styles/nested-page.css";
const Details = () => {
  const { van } = useOutletContext();
  return (
    <section className="nested-main-page">
      <h1>Details go here</h1>
      <p>{van.description}</p>
    </section>
  );
};

export default Details;
