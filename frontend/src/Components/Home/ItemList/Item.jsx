import React from "react";
import "./Item.scss";
import checkmark from "./checked.png";

export default function Item() {
  return (
    <>
      <div className="main__list">
        <div className="list1">
          <img src={checkmark} alt="icon" className="icon" />
          <p className="list__item">
            公司会员” 现階段只接受香港、新加坡、英国、加拿大公司申请
          </p>
        </div>
        <div className="list1">
          <img src={checkmark} alt="icon" className="icon" />
          <p className="list__item">
            如早鸟会員因新加坡金融管理局指示而未能成功申請銀行帳户，可选择全额退款或将名额转让他人一次(再次不成功，将自动退款)
          </p>
        </div>
        <div className="list1">
          <img src={checkmark} alt="icon" className="icon" />
          <p className="list__item">
            MasterCard设计已交由新加坡金管局(MAS)审批，预计数星期內完成，最终获批设计或有出入，早鸟会员敬请留意
          </p>
        </div>
      </div>
    </>
  );
}
