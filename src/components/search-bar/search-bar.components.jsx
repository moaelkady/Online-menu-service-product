import { useState } from "react";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";
import SearchItemsView from "../search-items-view/search-items-view.component";

import "./search-bar.styles.scss";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div
          className={searchClicked ? "svg-container open" : "svg-container"}
          onClick={() => {
            setSearchClicked(!searchClicked);
          }}
        >
          <SearchIcon />
        </div>
        <div className="search-value-container">
          <input
            className={searchClicked ? "open" : ""}
            type="text"
            name="search-value"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
      {searchClicked && <SearchItemsView searchValue={searchValue} /> }
    </div>
  );
};

export default SearchBar;
