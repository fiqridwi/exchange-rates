import React from "react";

const Footer = () => {
  return (
    <div>
      <p>Rates are based on 1 USD.</p>
      <p>
        This application uses API from{" "}
        <a
          target="_blank"
          style={{ color: "white" }}
          href="https://currencyfreaks.com/"
          rel="noreferrer"
        >
          https://currencyfreaks.com
        </a>
        .{" "}
      </p>
    </div>
  );
};

export default Footer;
