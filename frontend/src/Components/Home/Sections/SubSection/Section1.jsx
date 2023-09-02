import React from "react";
import "./Section1.scss";

export default function Section1({
  sectionTitle,
  sectionContext,
  sectionImage,
}) {
  return (
    <>
      <div className="main__section1__container">
        <div className="right__section">
          <h2 className="right__heading">{sectionTitle}</h2>
          <h3 className="right__context">{sectionContext}</h3>
        </div>
        <div className="left__section">
          <div className="left__image">
            <img src={sectionImage} alt="sectionImage" />
          </div>
        </div>
      </div>
    </>
  );
}
