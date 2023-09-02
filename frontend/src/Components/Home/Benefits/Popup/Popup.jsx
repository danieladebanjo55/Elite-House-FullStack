import React, { useState } from "react";
import "./Popup.scss";

export default function Popup({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <div onClick={togglePopup}>{trigger}</div>
      {isOpen && <div className="popup-content">{children}</div>}
    </div>
  );
}
