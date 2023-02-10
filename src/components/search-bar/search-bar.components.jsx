import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../error-boundry/error-boundary.component";
import Loading from "../loading/loading.component";
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg";
import "./search-bar.styles.scss";

const SearchItemsView = React.lazy(() =>
  import("../search-items-view/search-items-view.component")
);
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
          <label for="searchItem" className="hide">Search For:</label>
          <input
            placeholder="Search For..."
            className={searchClicked ? "open" : ""}
            type="text"
            name="search-value"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>

      {searchClicked && (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense fallback={<Loading />}>
            <SearchItemsView searchValue={searchValue} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SearchBar;
