import { useContext, useState, useEffect } from "react";
import "./search-items-view.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";

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

  console.log(filteredData);
  return (
    <div className="search-items-view-container">
      <div className="search-items-view">
        {filteredData && filteredData.map((product) => <ProductCard product={product} key={product.name}/>)}
      </div>
    </div>
  );
};

export default SearchItemsView;
