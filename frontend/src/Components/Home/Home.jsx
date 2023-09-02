import React from "react";
import NavBar from "../NavBar/Navbar";
import "./Home.scss";
import Benefit from "./Benefits/Benefit";
import Packages from "./Packages/Packages";
import Item from "./ItemList/Item";
import Footer from "./Footer/Footer";
import Section from "./Sections/Section";

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
              尚英社是全球首个将金融科技和区块链技术应用于高端会员计划的项目，为全球提供跨境支付、银行、金融服务、旅行、娱乐和
              Web3服务。
            </p>
            <button className="hero__btn">Join Now</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <Benefit />
      <Section />
      <Packages />
      <Item />
      <Footer />
    </>
  );
}
