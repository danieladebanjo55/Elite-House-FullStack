import React from "react";
import "./Benefit.scss";
import Card from "./Cards/Card";
import Image from "./mastercard.png";

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
          <Card image={Image} subtitle="代办新加坡银行户口及服务" />
          <Card
            image={Image}
            subtitle="社交电商服务
"
          />
          <Card image={Image} subtitle="Mastercard 扣帐卡" />
          <Card image={Image} subtitle="国外资产配置" />
          <Card image={Image} subtitle="AI世界文旅" />
          <Card image={Image} subtitle="Web3区块链系统" />
        </div>
      </div>
    </>
  );
}
