import QDevLogo from "../../assets/QDev.webp";

import "./footer.styles.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>Powered By || </p>
        <a href="https://qdev.store" target="_blank" rel="noreferrer">
          <img src={QDevLogo} alt="Qdev Logo" />{" "}
          <span className="primary">QDev</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
