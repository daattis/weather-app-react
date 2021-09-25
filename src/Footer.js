import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>© Copyright {currentYear} Anne Jokinen</p>
    </div>
  );
};

export default Footer;
