import React from "react";
import "./Coming.scss";

export default function Coming() {
  return (
    <>
      <div className="main__coming">
        <div className="coming__container">
          <h1 className="coming__title">Coming Soon</h1>
          <h2 className="coming__price">升级会员 +$1480 (未来提供) </h2>
          <div className="coming__list">
            <ul className="my__list">
              <li>香港TCSP发牌信托户口</li>
              <li>资产配置渠道</li>
              <li>优质信托产品</li>
            </ul>
            <div className="special__price">
              <h3>接受USDT付款</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
