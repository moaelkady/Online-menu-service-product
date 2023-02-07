import React, { Suspense, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import "./categories-preview.styles.scss";

const CategoryPreview = React.lazy(() =>
  import("../../components/category-preview/category-preview.component")
);
const PrimaryTitle = React.lazy(() =>
  import("../../components/primary-title/primary-title.component")
);

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="categories-preview-container">
      <Suspense fallback={<div>Loading...</div>}>
        <PrimaryTitle />
      </Suspense>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <CategoryPreview key={title} title={title} />
          </Suspense>
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
