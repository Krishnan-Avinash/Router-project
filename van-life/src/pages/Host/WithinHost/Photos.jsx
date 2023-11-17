import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../../styles/nested-page.css";

const Photos = () => {
  const { van } = useOutletContext();
  return (
    <div className="nested-main-page">
      <h1>Photos go here</h1>
      <img className="nested-photos" src={van.imageUrl} alt={van.name} />
    </div>
  );
};

export default Photos;
