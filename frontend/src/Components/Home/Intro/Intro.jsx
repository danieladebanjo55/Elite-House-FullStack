import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <>
      <div className="intro__main">
        <div className="intro__details">
          <div className="intro__context">
            <h3>
              <b>Elite House</b>品牌是由加拿大注册的科技金融公司
              <b>Blockmind Technologies Ltd.</b>
              营运。公司专注于“新金融”战略为发展蓝图，以新世代系统为发展核心，运用人工智能、区块链、云计算等前沿技术为会员提供一个集支付、理财、消费、娱乐及旅游的生产圈。公司将持续致力于新金融的推动者和生态构建者，让金融科技尽其所能，让社会更美好。
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
