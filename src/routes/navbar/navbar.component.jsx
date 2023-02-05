import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import logo from "../../assets/logo.webp";

import "./navbar.styles.scss";
const navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="app logo" />
          </div>
        </div>
        <div className="search-bar-container hide">
          <div className="search-bar">Search bar feature</div>
        </div>
        <div className="home-link-container">
          <div className="home-link">
            <Link to="/">
              <HomeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default navbar;
