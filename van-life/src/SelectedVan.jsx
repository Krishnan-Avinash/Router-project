import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const SelectedVan = () => {
  return (
    <div>
      <div className="back-back">
        <Link to="/vans">Back to all vans</Link>
      </div>
      <div className="selected-van">
        <div className="cars">
          <Link to="/selectedvan">
            <img src="https://source.unsplash.com/random/150x150/?car" alt="" />
          </Link>
        </div>
        <div className="right-1">
          <h1>Explorer1</h1>
          <h3>$80/day</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, beatae ipsum hic, illo dolores minus eligendi
            repudiandae porro, fugiat nihil deserunt. Praesentium ab molestiae
            distinctio iure cupiditate maxime dolorum in eveniet quam tempora
            atque ad, placeat architecto, amet quidem quis ipsa vel inventore
            perferendis minima perspiciatis accusantium ullam repudiandae?
            Accusamus.
          </h5>
          <button className="btn">Rent this van</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedVan;
