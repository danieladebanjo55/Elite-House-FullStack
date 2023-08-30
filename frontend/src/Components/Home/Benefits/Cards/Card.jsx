import React from "react";
import "./Card.scss";

export default function Card({ image, title, subtitle }) {
  return (
    <>
      <div className="card">
        <img src={image} />
        <h2>{title}</h2>
        <p className="card__text">{subtitle}</p>
      </div>
    </>
  );
}
