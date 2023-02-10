import React, { Suspense, useContext, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../error-boundry/error-boundary.component";
import Loading from "../loading/loading.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./search-items-view.styles.scss";

const ProductCard = React.lazy(() =>
  import("../product-card/product-card.component")
);

const SearchItemsView = ({ searchValue }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [productsItems, setProductsItems] = useState([]);
  const [filteredData, setFilterdData] = useState([]);

  useEffect(() => {
    const categoriesValues = Object.values(categoriesMap);
    setProductsItems(categoriesValues.flat());
  }, [categoriesMap]);

  useEffect(() => {
    setFilterdData(
      productsItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, productsItems]);
  return (
    <div className="search-items-view-container">
      <div className="search-items-view">
        {filteredData.length > 0 &&
          filteredData.map((product) => (
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
              key={product.name}
            >
              <Suspense fallback={<Loading />}>
                <ProductCard product={product} />
              </Suspense>
            </ErrorBoundary>
          ))}
        {filteredData.length === 0 && (
          <div style={{ marginTop: "50px" }}>Sorry try something else</div>
        )}
      </div>
    </div>
  );
};

export default SearchItemsView;
