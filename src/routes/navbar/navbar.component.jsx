import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import logo from "../../assets/logo.webp";
import SearchBar from "../../components/search-bar/search-bar.components";

import "./navbar.styles.scss";
const navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">
            <img width="39px" height="44px" src={logo} alt="app logo" />
          </div>
        </div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="home-link-container">
          <div className="home-link">
            <Link to="/">
              <HomeIcon />
              <span className="font-size-zero">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default navbar;
