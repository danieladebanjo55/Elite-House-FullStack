import React from "react";
import "./Benefit.scss";
import Card from "./Cards/Card";

import Envelope from "./envelope.png";
import Seo from "./seo.png";
import Seo1 from "./seo1.png";
import Social from "./social-media.png";
import Search from "./search1.png";
import Plan from "./planning.png";

export default function Benefit() {
  return (
    <>
      <div className="benefit__main">
        <div className="upper">
          <h2 className="bene__title">What's In It For You</h2>
          <p className="bene__subtext">
            Here's a few of the many benefits you will enjoy as an Elite House
            Member
          </p>
        </div>
        <div className="lower">
          <Card image={Envelope} subtitle="代办新加坡银行户口及服务" />
          <Card image={Seo} subtitle="社交电商服务" />
          <Card image={Seo1} subtitle="Mastercard 扣帐卡" />
          <Card image={Social} subtitle="国外资产配置" />
          <Card image={Search} subtitle="AI世界文旅" />
          <Card image={Plan} subtitle="Web3区块链系统" />
        </div>
      </div>
    </>
  );
}
