import React from "react";
import "./Footer.scss";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="main__footer">
        <div className="footer__content">
          <div className="link">
            <Link to="/disclaimer">
              <p className="loml">Disclaimer</p>
            </Link>
          </div>
          <div className="paragraph">
            <p>
              Copyright &copy; 2023 Blockmind Technologies Ltd. Powered by
              Buyzible
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
