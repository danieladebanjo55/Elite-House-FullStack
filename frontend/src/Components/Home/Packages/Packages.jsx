import React from "react";
import "./Packages.scss";

export default function Packages() {
  const checkout = (item) => {
    fetch("https://stripe-sl7j.onrender.com/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        item: item, // Send the selected item as an individual object
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  return (
    <>
      <div className="main__package">
        <div className="upper__package">
          <h2 className="pack__title">选择计划</h2>
          <p className="pack__subtext">早鸟优惠</p>
        </div>
        <div className="lower__package">
          <div className="saving"></div>
          <div className="package__container">
            <h1 className="package__title">普通会员</h1>
            <div className="package__list">
              <ul className="my__list">
                <li>代办万事达卡</li>
                <li>代办万新加坡数字银行账户</li>
                <li>多功能会员电子钱包</li>
                <li>旅游、消费、娱乐优惠</li>
                <li>个人版社交电商系统 (付费选项)</li>
              </ul>
            </div>
            <h2 className="package__price">
              2000¥
              <s>
                <sup>3800¥</sup>
              </s>
            </h2>
            <div className="package__button">
              <button
                onClick={() =>
                  checkout({
                    id: 1,
                    quantity: 1,
                    price: 2000,
                    name: "Basic Plan",
                  })
                }
              >
                登记
              </button>
            </div>
          </div>
          <div className="package__container">
            <h1 className="package__title">公司会员</h1>
            <div className="package__list">
              <ul className="my__list">
                <li>代办万事达卡</li>
                <li>代办万新加坡数字银行公司账户</li>
                <li>多功能会员电子钱包</li>
                <li>接受加密支付</li>
                <li>企业版社交电商系统 (付费选项)</li>
              </ul>
            </div>
            <h2 className="package__price">
              6000¥
              <s>
                <sup>8800¥</sup>
              </s>
            </h2>
            <div className="package__button">
              <button
                onClick={() =>
                  checkout({
                    id: 2,
                    quantity: 1,
                    price: 6000,
                    name: "Premium Plan",
                  })
                }
              >
                登记
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
