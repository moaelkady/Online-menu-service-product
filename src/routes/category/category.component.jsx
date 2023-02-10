import React, { useContext, useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import Loading from "../../components/loading/loading.component";

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
      <Suspense fallback={<Loading />}>
        <PrimaryTitle title={category.toUpperCase()} />
      </Suspense>
      <div className="product-card-container">
        {products &&
          products.map((product) => (
            <Suspense fallback={<Loading />} key={product.id}>
              <ProductCard product={product} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default Category;
