import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "../../styles/NestedSelectedVanStyle.css";

const SelectedVan = () => {
  const params = useParams();
  const [van, setVan] = useState("");
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  return (
    <>
      <div className="back-to-all-vans nested-nav">
        <Link to=".." relative="path">
          &#8592;Back to all vans
        </Link>
      </div>
      <div className="nested-van-detail-container">
        {van ? (
          <div className="nested-van-detail">
            <img alt={van.name} src={van.imageUrl} />
            <div className="nested-right">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="nested-van-price">
                <span>${van.price}</span>/day
              </p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>

      <div className="nested-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "nested-selected-link" : null
          }
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className={({ isActive }) =>
            isActive ? "nested-selected-link" : null
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className={({ isActive }) =>
            isActive ? "nested-selected-link" : null
          }
        >
          Photos
        </NavLink>
      </div>

      <Outlet context={{ van }} />
    </>
  );
};

export default SelectedVan;
