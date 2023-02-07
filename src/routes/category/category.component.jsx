import React, { useContext, useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const ProductCard = React.lazy(() =>
  import("../../components/product-card/product-card.component")
);
const PrimaryTitle = React.lazy(() =>
  import("../../components/primary-title/primary-title.component")
);

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <Suspense fallback={<div>Loading...</div>}>
        <PrimaryTitle title={category.toUpperCase()} />
      </Suspense>
      <div className="product-card-container">
        {products &&
          products.map((product) => (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductCard key={product.id} product={product} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default Category;
