import React from "react";
import "./Benefit.scss";
import Card from "./Cards/Card";

import Envelope from "./envelope.png";
import Seo from "./seo.png";
import Seo1 from "./seo1.png";
import Social from "./social-media.png";
import Search from "./search1.png";
import Plan from "./planning.png";

import Popup from "./BenefitPage/Benefit1";

import { Link } from "react-router-dom";

export default function Benefit() {
  return (
    <>
      <div className="benefit__main">
        <div className="upper">
          <h2 className="bene__title">會員優惠</h2>
        </div>
        <div className="lower">
          <Link to="/benefit1">
            <Card image={Envelope} subtitle="代办新加坡银行户口及服务" />
          </Link>

          <Link to="/benefit2">
            <Card image={Seo1} subtitle="Mastercard 扣帐卡" />
          </Link>

          <Link to="/benefit3">
            <Card image={Social} subtitle="国外资产配置" />
          </Link>

          <Link to="/benefit4">
            <Card image={Seo} subtitle="社交电商服务" />
          </Link>

          <Link to="/benefit5">
            <Card image={Search} subtitle="AI世界文旅" />
          </Link>

          <Link to="/benefit6">
            <Card image={Plan} subtitle="Web3区块链系统" />
          </Link>
        </div>
      </div>
    </>
  );
}
