import React from "react";
import NavBar from "../NavBar/Navbar";
import "./Home.scss";
import Benefit from "./Benefits/Benefit";
import Packages from "./Packages/Packages";
import Item from "./ItemList/Item";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main__container">
        <div className="main__overlay"></div>
        <div className="main__content">
          <div className="left">
            <h2 className="heading">Elite House</h2>
            <p className="main__subtext">
              A place where the elite come together and build something great
              together in harmony.
            </p>
            <button className="hero__btn">Join Now</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <Benefit />
      <Packages />
      <Item />
      <Footer />
    </>
  );
}
