import React from "react";
import "./Section2.scss";

export default function Section2({
  sectionTitle,
  sectionContext,
  sectionImage,
}) {
  return (
    <>
      <div className="main__section2__container">
        <div className="left__section">
          <div className="left__image">
            <img src={sectionImage} alt="sectionImage" />
          </div>
        </div>
        <div className="right__section">
          <h2 className="right__heading">{sectionTitle}</h2>
          <h3 className="right__context">{sectionContext}</h3>
        </div>
      </div>
    </>
  );
}
