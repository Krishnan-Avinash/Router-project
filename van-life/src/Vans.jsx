import React from "react";
import { Link } from "react-router-dom";
import SelectedVan from "./SelectedVan";
const Vans = () => {
  return (
    <div className="car-container">
      <div className="cars">
        <Link to="/selectedvan">
          <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
        </Link>
        <div className="car-details">
          <h3>Explorer</h3>
          <div className="price">$80</div>
        </div>
      </div>
      <div className="cars">
        <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
        <div className="car-details">
          <h3>Explorer2</h3>
          <div className="price">$820</div>
        </div>
      </div>
      <div className="cars">
        <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
        <div className="car-details">
          <h3>Explorer3</h3>
          <div className="price">$830</div>
        </div>
      </div>
      <div className="cars">
        <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
        <div className="car-details">
          <h3>Explorer4</h3>
          <div className="price">$804</div>
        </div>
      </div>
      <div className="cars">
        <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
        <div className="car-details">
          <h3>Explorer5</h3>
          <div className="price">$805</div>
        </div>
      </div>
    </div>
  );
};

export default Vans;
